---
layout: post
title: Creating a hover alternative on touchscreens
author: Erica Sosa
tags: [css, responsive, javascript, ux, design]
permalink: /blog/:title
---

While hover effects look cool for mouse or trackpad users, they’re confusing and ineffective on touchscreens. This blog explains how I created a hover effect alternative for touchscreens.


## Problem:

On this site, [erica.tech](http://erica.tech "erica.tech"), there is a section to display some of my portfolio pieces. In this [portfolio section]({{ site.baseurl}}/#portfolio "erica.tech portfolio"), there is a screenshot of the portfolio piece and a hover effect, which reveals two buttons, “learn more” and “visit the site”. This hover effect was part of the Bootstrap theme I used.

![Portfolio image default](/images/hover_blog/portfolio_default.jpg)
<small>The portfolio image default</small>

![Portfolio image default](/images/hover_blog/portfolio_hover.jpg)
<small>The portfolio image on hover</small>

Looks cool on your desktop, right? But as we all know, hover effects don’t work on touch devices. While a non-touchscreen user gets a hover effect with an indication of what to do next, a touchscreen user has no indication and, thus, no idea what to do.

![Portfolio image device](/images/hover_blog/portfolio_mobile_300px.jpg)
<p><small>The portfolio image on touchscreen/mobile shows no indication for the user</small></p>

## Current setup:

By default, the overlay is set to `opacity: 0;` (see line 9). On hover, the overlay is set to `opacity: 1;`(see line 18). Therefore, the overlay shows on hover.

### HTML:

{% highlight html linenos %}
<div class="portfolio-box">
  <img src="images/book_searcher.jpg" class="img-responsive" alt="">
  <div class="portfolio-box-caption">
    <div class="portfolio-box-caption-content">
      <div class="project-category text-faded">
        Web app
      </div>
      <div class="project-name">
        Book Searcher
        <p>Search the NY Times best sellers list and see info and ratings about each book.</p>
        <p>
          <a href="{{ site.baseurl }}/blog/booksearcher" class="btn btn-sm portfolio-button">Learn more</a>
          <a href="http://booksearcher.erica.tech" class="btn portfolio-button btn-sm">Visit the site</a>
        </p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### CSS:

{% highlight css linenos %}
.portfolio-box .portfolio-box-caption {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    opacity: 0;
    background: rgba(240,95,64,.9);
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
}

.portfolio-box:hover .portfolio-box-caption {
    opacity: 1;
}

{% endhighlight %}

## Solution:

1. Create a layer under `.portfolio-box-caption` called `.portfolio-box-question`(HTML lines 3-5). You can place it “under” by setting `z-index: 1;`


2. Insert a glyphicon (HTML line 4) with a question mark to indicate to the user that there’s something that needs clicking/touching/hovering. Now this `.portfolio-box-question` is visible by default, because it sits under the `.portfolio-box-caption`, which is set to `opacity: 0;`.

3. Next we need a JavaScript function. This function will be set for touch screens, so that when a user “touches”, the `.portfolio-box-caption` becomes visible by setting `opacity: 1;`. This will reveal the description and buttons which guide the user.


### HTML
{% highlight html linenos %}
<div class="portfolio-box">
  <img src="images/book_searcher.jpg" class="img-responsive" alt="">
  <div class="portfolio-box-question">
      <span class="glyphicon glyphicon-question-sign"></span>
  </div>
  <div class="portfolio-box-caption">
    <div class="portfolio-box-caption-content">
      <div class="project-category text-faded">
          Web app
      </div>
      <div class="project-name">
        Book Searcher
        <p>Search the NY Times best sellers list and see info and ratings about each book.</p>
        <p>
          <a href="{{ site.baseurl }}/blog/booksearcher" class="btn btn-sm portfolio-button">Learn more</a>
          <a href="http://booksearcher.erica.tech" class="btn portfolio-button btn-sm">Visit the site</a>
        </p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### CSS: 
{% highlight css linenos %}
.portfolio-box .portfolio-box-caption {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    opacity: 0;
    background: rgba(240,95,64,.9);
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
    z-index: 2;
}

.portfolio-box-question {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: #f05f40;
    z-index: 1;
    font-size: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
{% endhighlight %}

### JavaScript

{% highlight javascript linenos %}
$(".portfolio-box-question").on('click touchstart', function() {
  $(".portfolio-box-caption").css("opacity", "1");
});
{% endhighlight %}

## The new look

### Non-touchscreen

This stays mostly the same. The big difference is the question mark in the center of the image. I included this on non-touchscreens for two reasons. 1. So that the non-touchscreen user also has some cue that they need to hover, just in case they avoid the image entirely. 2. It's easier than creating a totally different display for non-touchscreens.

The first image shows the default and the second image shows the hover.

![Portfolio image default](/images/hover_blog/portfolio_question_notouch.jpg)

![Portfolio image default](/images/hover_blog/portfolio_hover.jpg)

### Touchscreen

The first image shows the default look on touchscreen. Now the user knows they need to click. The second image shows what happens when the user clicks. The overlay becomes visible. Now the user can decide where they want to go.

![Portfolio image default](/images/hover_blog/portfolio_mobile_question_box_300px.jpg)
![Portfolio image default](/images/hover_blog/portfolio_mobile_hover_alternative_300px.jpg)

This was a fun little project and I'm glad I figured out how to do it. Thanks for reading this far! See you later! 
