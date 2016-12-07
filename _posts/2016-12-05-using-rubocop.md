---
layout: post
title: Using Rubocop
author: Erica Sosa
tags: [ruby, rails]
permalink: /blog/:title
---

I just had my first experience with [Rubocop](https://github.com/bbatsov/rubocop "Rubocop"). This hilariously named Ruby Gem checks your code for violations of Ruby conventions. I used two ways to check my code with Rubocop.

`my_repo$ rubocop`

This returns how many files were checked and how many “offenses” you have committed. 

You can also check this in your continuous integration setup (you have one, right? :wink:). Though I guess it’s better to check it before you push, to save steps.

### My offenses

~~~~
Extra blank line detected
~~~~

I had an extra line in my Gemfile. So offensive, right?

~~~
Missing frozen string literal comment
~~~

This one is bizarre and I had to look into it. You have to add the following to all your `.rb` files:


`# frozen_string_literal: true`


This is newly supported in Ruby 2.3. It means that you can’t redefine a string variable or you will get an error. 

~~~
Put empty method definitions on a single line.
~~~

This was the method in question:

~~~
def index
end
~~~

I was just setting up a quick homepage on new Rails app, to be changed later. Apparently this empty method syntax is not kosher! Who knew?! Rubocop wants it like this:

`def index; end`

One line! With a semicolon! Totally new to me. This is the kind of thing you would never know without Rubocop (or a picky boss or colleague), because it will never break your code.

~~~
Missing top-level class documentation comment.
~~~

You’re supposed to put a comment above each class with an explanation. I didn’t know that!


### Verdict

I was not aware of most of these styling conventions. I’m still not sure if they are strange prescriptions that no one cares about or if they’re legitimate “offenses” that will bring about judgement and scorn from colleagues and peers. Either way, it’s probably best to obey Rubocop and avoid going to ruby jail.
