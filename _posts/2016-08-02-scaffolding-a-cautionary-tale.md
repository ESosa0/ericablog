---
layout: post
title: "Scaffolding: A Cautionary Tale"
author: Erica Sosa
tags: [rails, scaffolding]
permalink: /blog/:title
---

When I first started learning Rails, I discovered this thing called scaffolding. Scaffolding is a super short cut to creating models, controllers, tests, and views, all perfectly connected to each other, all from one command in the shell. `$rails g scaffold model_name`.

As a beginner, this seems amazing. You skip so many tedious steps and get right to the good stuff. However, almost all Rails developers will tell you that scaffolding is bad. You ask why. They say “You’ll never use it on the job” or “It generates unnecessary things you don’t need”. Neither of those arguments are particularly compelling. But, trusting in those who know better than I do, I didn’t use scaffolding for my first project. And, in fact, it turned out to be a better learning experience doing everything manually.

For my second app, I thought it would be okay to try scaffolding. So I scaffolded two models, Lists and Books. As expected, in one command, I got a model, controller, test suite, and views. I thought, “okay, cool, that saved me some time” and didn’t give it a second thought.

When (more or less) finished, I deployed the app and set up a cron job to update the database every week on Monday. I had had some problems with the cron job, so I updated it manually on Tuesday. On Wednesday, I took a look at the app. ALL OF MY DATA WAS GONE! I thought, that’s so weird, it’s not even Monday. It shouldn’t be updating at all. Well, it wasn’t my cron job. Can you guess what happened? Scaffolding happened!

Way back at the beginning of this app, scaffolding created views, views that I had completely forgotten about. The view for books#index has links to “new”, “edit”, and “destroy”. Destroy! That means any user, with the right URL, can go in and destroy my books. But who would do such a thing? Google would! Google robots crawl the internet and click all your links. So if there is a destroy link, Google will find it. So that’s how scaffolding and Google joined forces, destroyed all my data, and broke my app. 

![The view that scaffolding created]({{site.baseurl}}/images/scaffolding_books.png)
<small>The view that scaffolding created. Notice the “destroy” link on the right.</small>

But, I’m being dramatic. It was a really easy fix. What did I do? I deleted all the views that scaffolding created and I ran my rake task to update the database. Problem solved. In this case it was an easy fix, but it could have been a huge mess. 

So, let this be a cautionary tale for all the Rails newbies. You may think scaffolding is a harmless time save, but it can have serious consequences. Scaffolding is, at best, unnecessary and, at worst, a horrible parasite that will destroy everything you have worked so hard to create. Happy coding! ;)
