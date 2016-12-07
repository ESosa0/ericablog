---
layout: post
title: BookSearcher
author: Erica Sosa
tags: [rails, ruby, api, css, responsive, bootstrap]
excerpt: BookSearcher helps a user find popular books and check their reviews. The user selects a list from the New York Times Best Seller’s List, then receives all the current best sellers on that list. The user can then browse the list or click on a specific book to get the critics’ reviews and review score for that book.
permalink: /blog/:title
---

[![BookSearcher Image](/images/book_searcher.png)](http://booksearcher.erica.tech)

### [Try the app!](http://booksearcher.erica.tech "BookSearcher")
### [See the code!](https://github.com/ESosa0/book-searcher "BookSearcher code")
         
### Technologies, Gems and APIs 

#### Ruby on Rails, JavaScript, HTML, CSS, Ajax, jQuery, MySQL, DigitalOcean Ubuntu VPS, Capistrano, Bootstrap, Whenever, Rest Client, New York Times Books API, I Dream Books API 

### What is it?

BookSearcher helps a user find popular books and check their reviews. The user selects a list from the New York Times Best Seller’s List, then receives all the current best sellers on that list. The user can then browse the list or click on a specific book to get the critics’ reviews and review score for that book.

I built BookSearcher as a practice project to learn new and interesting skills. These were some things that I learned or practiced:
    
* Pull and save data from APIs
* Merge data from multiple APIs
* Structure data with many association types and join tables
* Create rake tasks and schedule cron jobs to update the database
* Build a responsive site with media queries

### Why Books?

I love to read, especially contemporary books. Staying current is important to me, so I thought it would be fun to make an app that searches the newest, most popular books. I don’t think BookSearcher will change the world. It’s just for fun and practice.

### Was it hard?

I built this app while working from coworking spaces in Morocco and Thailand. I was able to work at my own pace, avoiding a lot of the stress that comes with deadlines. In that sense, it wasn’t too mentally draining. In general, this app went much more smoothly than the last one, which I take as a good sign of improvement. Old concepts are solidifying and I’m quicker to understand new concepts. 

That said, it wouldn’t be programming if I did have some technical challenges along the way. I had done some work with APIs in my bootcamp, but not nearly as extensive as this. The most difficult part was structuring my database in a way that would allow me to easily save the data pulled from the API. 

The front-end of BookSearcher was also a challenge for me. At first, I made a page that only looked good on a desktop screen. I had not considered BookSearcher’s responsiveness. On the book list page, I set the background image to a photo of an open book, then split the screen into two columns so that each column would appear to be a page in the book. While this looked awesome on my screen, I quickly realized that it did not look so awesome on a tablet or smartphone. It turns out I picked a really bad background image for a responsive site. But, rather than redesign the entire front-end, I began a deep dive into responsive design and I made it work. By using media queries, I changed the background image for tablets and smartphones and just generally redesigned all the pages for small screens. That was a much bigger undertaking than I expected, but I’m so glad I took it seriously. I learned a ton!

### What's next for BookSearcher?

Like I said, BookSearcher was just for fun and practice, so I probably won’t do too much more work on it. But I do have some ideas on how it could be improved.  

* Pull more data from the APIs on the authors to display their bios and popular books
* Add a third  API to pull reader reviews and scores (not just critics’ reviews)
* Keep fiddling with the responsiveness because there’s always room for improvement 

**Update as of December 1, 2016: I'd like to completely redesign the front-end of BookSearcher from a mobile-first perspective. I decided that I really don't like the design on anything but large screens. Time for a redo!

### What do you think?

Thanks for checking out my app! Please let me know if you have any questions, ideas or if you just want to chat!
