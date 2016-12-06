---
layout: post
title: Emojis in Markdown
author: Erica Sosa
tags: [jekyll, markdown]
---

Emojis are such a huge part of our digital landscape. I use them everywhere from emails, to text messages, to Facebook, to… my blog? Wait, can I use them in my blog? How do I do that? 

This was my dilemma of the day. How can it possibly be that I don’t know how to add an emoji to my blog? I have totally taken the ease of emojis in my life for granted. 

So, this is a Jekyll blog and I write in markdown. At first I thought there must be some markdown support for emojis. But I couldn’t find a simple way to do this. Turns out I would have to install a Jekyll plugin to make it happen. But by God, I was gonna make it happen.

Turns out it was super easy. Here’s what I did.

Jekyll doesn’t generate a `Gemfile`, so you have to add one. In your root directory add `Gemfile`

Next, place this code inside your `Gemfile`

~~~~
source 'https://rubygems.org'
gem 'jemoji'
~~~~

I used [Jemoji](https://github.com/jekyll/jemoji "Jemoji"), but there are others you find as well. 

Run `$ bundle` 

Finished! Stick any emoji you want inside of your markdown file. Here’s an [emoji cheat sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/ "emoji cheat sheet"). 

For the record, here are some of my favorite emojis and why I love them: 

:purple_heart: Great for expressing affection without being too intense about it

:mask: Necessary for anyone who has driven a scooter in SE Asia

:sob: The ultimate sad face

:poop: Because we're all in touch with our inner 5-year-old

:pray: How you say thank you after living in Thailand for a while

:muscle: When you do something badass, which is, like, all the time, amiright?

:sushi: When you're super pumped about going out for sushi

:heart_eyes_cat: When you have love in your heart that only a kitty can convey

:raising_hand: Because my partner's mom has decided this is her signature emoji. And that's funny.

