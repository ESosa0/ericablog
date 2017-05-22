---
layout: post
title: Reverting structure.sql to schema.rb
author: Erica Sosa
tags: [ruby, rails, sql, database]
excerpt:
permalink: /blog/:title
---

First, I know what you're thinking. Why would you ever have to revert a `structure.sql` file to a `schema.rb` file in a Rails app? What an incredibly bizarre problem to have! Well, there are some advantages to `structure.sql`, for example, being able to use `sql` features that can't be put in a Ruby file. I suppose at some point, long before I came on the scene, we needed these extra features. But then we didn't need them anymore and it was my job to change back to `schema.rb`. Here's how I did it:

Since this is such a rare problem, there aren't many resources on this particular topic. I thought my findings might be useful in the unlikely event of someone having to deal with this same problem.

The thing is, you can't just run a command to convert `structure.sql` to `schema.rb`. I mean, maybe you could if you were really super lucky and nothing broke, but that wasn't the case for me. The most important thing in my case was cleaning up the database, unifying the data structure inside the `structure.sql`, and getting the data in a Rails-friendly format before making "the big change".

## Lots of empty strings

There were lots of empty strings inside the database. This is not a good scene. First task: make empty strings null. I wrote a rake task to get the job done.

Tip: Before you run this rake task, decide if you want to run it on all models and columns. You can skip a model/column using something like this `next if model.name == "MyModel"`

Also, don't forget to run this on production once deployed.

{% highlight ruby linenos %}
namespace :db do
  desc "Replace empty strings with null"
  task replace_empty_strings: :environment do
    Rails.application.eager_load!
    ActiveRecord::Base.descendants.each do |model|
      puts "working on #{model.name}"
      model.columns.each do |column|
        if column.type == :string
          puts "replacing values in #{column.name}"
          model.where(column.name => '').update_all(column.name => nil)
        end
      end
    end
  end
{% endhighlight %}

## Remove custom column triggers

Rails manages `updated_at` and `created_at` and the default for these columns should be `nil`. In this case, there was another application that was using the database and inserting new records. That application was using triggers in the database to set the `created_at` and `updated_at`. But because we were no longer using this second application, and the Rails app was going to manage the DB again, I had to set the column defaults back to `nil`, letting Rails handle these columns.

{% highlight ruby linenos %}
  class RemoveDefaultsFromTimestampColumns < ActiveRecord::Migration
    def change
      tables = ActiveRecord::Base.connection.tables
      tables.each do |table|
        if ActiveRecord::Base.connection.column_exists?(table, :created_at)
          change_column_default(table, :created_at, nil)
        end
        if ActiveRecord::Base.connection.column_exists?(table, :updated_at)
          change_column_default(table, :updated_at, nil)
        end
      end
    end
  end
{% endhighlight %}

## Change all character sets to be the same

There was a mix of different collations in the DB and this can cause problems. The database had `utf8_general_ci`, `utf8mb4_unicode_ci`, and `latin1_swedish_ci`. I wanted them to all be the same, so I chose `utf8mb4_unicode_ci`.

I based this migration off of [this](https://gist.github.com/tjh/1711329). In my case, I had three types of `column.sql_type`, so I had to run cases for `VARCHAR`, `CHAR`, and `ENUM`. I know this is a big messy thing with lots of repeated code, but it was a one-time migration just to get the job done and I didn't want to waste time refactoring. In retrospect, I should have done this *after* the next step (you'll see why if you make it that far), which would have prevented the need to run this on `CHAR`s and `ENUM`s.

{% highlight ruby linenos %}
  class MigrateToUtf8mb4 < ActiveRecord::Migration

    def db
      ActiveRecord::Base.connection
    end

    def up
      execute "ALTER DATABASE `#{db.current_database}` CHARACTER SET utf8mb4;"
      db.tables.each do |table|
        next if %w(ar_internal_metadata schema_migrations).include?(table)
        execute "ALTER TABLE `#{table}` CHARACTER SET = utf8mb4;"
        db.columns(table).each do |column|
          case column.sql_type
            when  /([a-z]*)text/i
              execute "ALTER TABLE `#{table}` CHANGE `#{column.name}` `#{column.name}` #{$1.upcase}TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
            when /varchar\(([0-9]+)\)/i
              indexed_column = db.indexes(table).any? { |index| index.columns.include?(column.name) }
              sql_type  = (indexed_column && $1.to_i > 191) ? 'VARCHAR(191)' : column.sql_type.upcase
              default   = (column.default.blank?) ? '' : "DEFAULT '#{column.default}'"
              null      = (column.null) ? '' : 'NOT NULL'
              execute "ALTER TABLE `#{table}` CHANGE `#{column.name}` `#{column.name}` #{sql_type} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci #{default} #{null};"
            when /char\(([0-9]+)\)/i
              indexed_column = db.indexes(table).any? { |index| index.columns.include?(column.name) }
              sql_type  = (indexed_column && $1.to_i > 191) ? 'CHAR(191)' : column.sql_type.upcase
              default   = (column.default.blank?) ? '' : "DEFAULT '#{column.default}'"
              null      = (column.null) ? '' : 'NOT NULL'
              execute "ALTER TABLE `#{table}` CHANGE `#{column.name}` `#{column.name}` #{sql_type} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci #{default} #{null};"
            when /enum\((.+)\)/i
              sql_type  = column.sql_type
              default   = (column.default.blank?) ? '' : "DEFAULT '#{column.default}'"
              null      = (column.null) ? '' : 'NOT NULL'
              execute "ALTER TABLE `#{table}` CHANGE `#{column.name}` `#{column.name}` #{sql_type} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci #{default} #{null};"
          end
        end
      end
    end
  end

{% endhighlight %}

## Change CHARS and ENUMS to VARCHARS

There were two column types that don't play nice in Rails: `CHAR` and `ENUM`. In order to revert to `schema.rb`, we needed Rails-friendly column types. Therefore, I decided to change these all to `VARCHAR`.

Here are the migrations to do this:

{% highlight ruby linenos %}

class ChangeCharColsToVarcharCols < ActiveRecord::Migration
  def up
    execute "ALTER TABLE `my_table` CHANGE `my_column` `my_column` VARCHAR( 191 )"
  end
end

class ChangeEnumColsToVarcharCols < ActiveRecord::Migration
  def up
    execute "ALTER TABLE `my_table` CHANGE `my_column` `my_column` VARCHAR( 191 )"
  end
end

{% endhighlight %}

## Can we revert the damn thing already?

Once everything was in good shape, I got to run that one little line that finally reverts the `structure.sql` to `schema.rb`. Are you ready for it?

`rake db:schema:dump`

That magic line! It generates a new schema based on what's actually in the database. But, as you can see, your database needs to be in good shape before running this task.

Thanks for reading and may you be blessed with a healthy database and beautiful schema.rb so that you may never suffer the hardships described above. :wink:


