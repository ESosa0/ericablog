---
layout: post
title: Positioning with Flexbox
author: Erica Sosa
tags: [css, flexbox, bootstrap]
---

I woke up this morning with an email from [Codeschool](https://www.codeschool.com "codeschool.com") announcing their new Flexbox course. I thought, "Okay, so that's what I'm doing today!" The extent of my using flexbox was a simple `display: flex`, which is a nice substitute for `display: inline-block`, but other than that, didn’t do much. Turns out, there are a ton of other properties to flexbox that make it pretty awesome. 

We have all struggled with centering items, creating grids, and of course the dreaded vertical alignment. Flexbox is a solution to all of these problems. Until now, I have been using the bootstrap grid to organize my pages. My first reaction to flexbox was that it would completely replace the grid system. I thought, flexbox is simpler, more elegant, and creates cleaner HTML because you don’t need all those rows and columns. Also, the wrap property makes it very useful for responsive design.

So I built something using flexbox, without the Boostrap grid. How was it? It was awesome, and easy. UNTIL... I resized my screen. Even though flexbox has that wrap property, you still have to customize your breakpoints to make it responsive. Bootstrap, of course, has that built in. I realized that I was just replacing the Bootsrap grid with another grid, one I made from scratch and spent too long building. 

Back to the beginning, using the Bootstrap grid. The good news is that [Bootstrap 4 uses flexbox](http://v4-alpha.getbootstrap.com/layout/flexbox-grid/ "boostrap 4 and flexbox"). What does that mean? Well, you can use the Bootstrap grid, then customize what's inside each row or column with flexbox. Best of both worlds! My favorite feature here is definitely the vertical alignment made super easy with flexbox. 

The Codeschool course teaches the user to create everything in flexbox from scratch. If you're using Bootstrap, you won't need to do this. But it's great to understand the principles behind flexbox so that you can customize exactly how you want.

Now I'll go over some of the cool flexbox features that I learned from the course. 

#Axes 

First I want to say that it's important to understand the difference between the main axis vs cross axis. I'm not sure if this is a fundamental concept or not. But I had to figure it out in this course, so I'm assuming other people will be in the same situation. 

If you have a row, the main axis will be horizontal and the cross-axis will be vertical. The opposite will apply to a column. If you have a column, the main axis will be vertical and the cross-axis will be vertical. Keep that in mind.

#display: flex

`display: flex;`

This is the “on” switch for flexbox. You need this before any of the other properties work.
If you add it to the parent item, all child elements will be inline. While it changes the behavior of children, it does not affect the grandchildren. If you don’t want it to affect child item, just throw a <div> around the child.

Now that you have the element set to display: flex, you can do a lot of other fun stuff.

#flex-wrap

`flex-wrap: wrap;`

If there’s not enough space, the element will move to the next line

`flex-wrap: wrap-reverse;`

The element moves to the second line, but displays in reverse order. I cant, for the life of me, think of a good use for this, but it’s still cool nonetheless.

#flex-direction

`flex-direction: column;`

The default flex-direction is row. This will make it a column. As mentioned above, this changes the main axis to vertical. That means that all the elements will stack vertically. 

Of course, vertical alignment is the HTML/CSS default, so you may ask why it’s useful. Well, as soon as you add a `display: flex`, you get horizontal alignment. Perhaps you want vertical alignment, but you still want to use other properties of flexbox. If you use flex-direction: column, you go back to vertical alignment, but you can still use the other coolnesses of flexbox.

#justify-content

`justify-content: flex-start;`
`justify-content: flex-end;`

This will align child elements to the beginning/end of the parent element. If you're using flex-direction: row, this will be the left/right side. If you're using flex-direction: column, this will be the top/bottom.

`justify-content: center;`

Centers content on the main axis.

`justify-content: space-between;`

Make content flush to the edges, with space in between. Flexbox uses an algorithm that calculates how much space is in between. If you want to override this, you have to use CSS.

`justify-content: space-around;`

Space is added around each element. This includes the edges so that content is not flush to the edges. Again, if you want to change the amount of space in between, you have to use CSS. You can’t specify the space between with flex. Though, that would be a nice addition.

#order

`order: -1 | 0 | 1 ;`

Changes the order of elements displayed within a flexbox. The default position is 0. -1 moves items to the beginning, while 1 moves them to the end.

#align-items

`align-items: stretch | flex-start | flex-end | center | baseline;`

Align-items distributes space on the cross axis. Meaning, if you’re in flex-direction: row, this is vertical alignment. If you’re in flex-direction: column, this is horizontal alignment.

#flex-grow

`flex-grow: 0 | 1;`

Used to specify the ratio of space an item should take up in it’s main axis. It takes numbers and the default is 0. Flex-grow: 1 will take up all the space available in the container.

#flex-shrink

`flex-shrink: 0 | 1;`

Specifies “shrink factor” of a flex item. It accepts numbers and the default is 1, meaning do shrink. 0 means don’t shrink.

#flex-basis

`flex-basis: % | px | em;`

Used to specify original size of an element.

#align-self

`align-self: stretch | flex-start | flex-end | center | baseline;`

Align individual items by overriding their parent value. For example, if you want one element in the div to be left-justified and the rest to be right-justified. Note: Align-items doesn’t control wrapped items.

These are the main takeaways from the course. It also went over a bunch of shorthand that I won't get into here.
I definitely recommend the codeschool course. It’s short and to the point, with practice exercises after each video. The instructor is clear and easy to follow. He recommends [Flexbox Froggy](http://flexboxfroggy.com/ "flexbox froggy") to practice, which is super fun.

If you choose to jump into flexbox, I hope you enjoy it! I definitely do!



