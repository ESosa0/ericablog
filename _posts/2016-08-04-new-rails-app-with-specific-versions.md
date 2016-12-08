---
layout: post
title: How to create a new Rails app with specific Rails and Ruby versions
subheading: And why I started taking notes…
author: Erica Sosa
tags: [ruby, rails, rvm, command line]
permalink: /blog/:title
---

Sometimes I come across a problem that I’ve already seen. Sometimes I remember how to solve it and sometimes I don’t. But when I don’t remember, I’m annoyed with myself. I think, why didn’t I take five extra minutes to write that down! So, that’s what I started to do. There are many tasks in programming that are a series of simple steps. It’s not rocket science, it’s just memorization. Write it down once and reference it forever! 

I was going through the book, [Rails 4 Test Prescriptions](https://pragprog.com/book/nrtest2/rails-4-test-prescriptions "Rails 4 Test Prescriptions") and wanted to follow along with the app they create in the book. Yes, you caught me, I did say Rails 4. That means the book is not current with the latest version of Rails (which is 5 at the time of this post). In order to save myself a potential headache down the road, I decided to use the exact Ruby and Rails versions they use in the book, Rails 4.1.7 and Ruby 2.1.4. Of course, the book expects you to know how to switch between versions. Now, I had done this one other time, but I didn’t remember how I did it. Some internet research helped me and I figured it out again. But I thought, that was a silly waste of time. I should just write it down and stick it in Google Doc for next time. And that’s what I did. So here’s what I wrote in my Google Doc (with some extra explanation here and there). I hope it will helpful to you too.

## Simple steps to change your Ruby and Rails versions

Make sure you have [RVM installed](https://rvm.io/rvm/install "install RVM"). Here, I will simply use Rails 4.0.0 and Ruby 2.0.0 as examples. You must change it to the versions that you need to use.

### From the command line:

Check if you have the Ruby version installed already. This command will show you all the versions of Ruby you already have. If the version you need is listed, skip the next step.

{% highlight bash %}
$ rvm list
{% endhighlight %}

Install the Ruby version you need.

{% highlight bash %}
$ rvm install 2.0.0 
{% endhighlight %}

Change to the Ruby version you just installed (or already had installed).

{% highlight bash %}
$ rvm use 2.0.0 
{% endhighlight %}

Install the Rails version you need.

{% highlight bash %}
$ gem install rails -v 4.0.0
{% endhighlight %}

Create new rails app with this rails version. *my_app is an example name. Change it to the name of your app.

{% highlight bash %}
$ rails _4.0.0_ new my_app
{% endhighlight %}


Change directories into your app’s folder

{% highlight bash %}
$ cd my_app
{% endhighlight %}

In order to set the default Ruby version for this app, you need to create new file at the root level in the directory, called .ruby-version. This is a hidden file, so if you do $ ls here, you will not see the file. Don’t freak out. 

{% highlight bash %}
$ touch .ruby-version
{% endhighlight %} 

Inside of .ruby-version, you write the ruby version you need to use. In this case, 2.0.0. You can use the echo command to write a new line into the file.

{% highlight bash %}
$ echo “2.0.0” >> .ruby-version
{% endhighlight %}

You can check that you did actually write in the file by using the $ cat command. It prints out the contents of the file.

{% highlight bash %}
$ cat .ruby-version
{% endhighlight %}

Double check that you have the right Ruby version in your Rails app.

{% highlight bash %}
$ ruby -v
{% endhighlight %}

And voila! You have just created a new Rails app and specified which versions of Ruby and Rails you want to run. 

I hope that was helpful. Stay tuned as I share more of my notes with you!


