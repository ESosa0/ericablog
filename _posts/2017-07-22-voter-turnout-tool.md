---
layout: post
title: Voter Turnout Tool - a React app
author: Erica Sosa
tags: [javascript, react, ui]
excerpt:
permalink: /blog/:title
---

The very cool and innovative organization where I work decided to roll out a new feature to their Ruby on Rails app and I am one of the proud developers who got to turn this feature into reality. [BallotReady](https://www.ballotready.org/) is an online voter guide that helps users research their ballots. They have recently decided to work with 3rd party organizations to show ballots for local elections and help voters find their election dates and polling places, then schedule a time to vote and get automated reminders. We call this the Voter Turnout Tool (I'm gonna call it the VTT for short).

On top of being a super important project with a huge social impact, it presented an interesting technical challenge that I was excited to solve. I worked with senior engineer, [Ludo van den Boom](http://ludo.is) on this project and together we brainstormed which technologies would be best for our purposes. As I mentioned, the app was already running on RoR, so we needed to integrate something into that framework. The feature we were building needed to be fast, moving quickly from screen to screen. For this reason, we chose to use React.js. This way we could quickly display information, pass that info from screen to screen, and not have to deal with page reloads.

I didn't know anything about React before working on the VTT. I spent some time with online tutorials, mostly the ones from [Codecademy](https://www.codecademy.com/learn/react-101) and [egghead.io](https://egghead.io/technologies/react). Of course, when I finished the tutorials, I didn't really get everything, but hey, that didn't stop me from starting to build the tool.

I consider this React app to be a very important step in my career. I am moving forward with JavaScript in new ways by picking up a framework that is immensely useful in my front-end work. And although plain JavaScript is not my main squeeze (I :heart: Ruby), React may just be competing for a place in my heart. Here are some of the really awesome things I learned:

- Various user flows
- Build an admin portal that can control various views
- Multitenancy
- Use React.js on top of Rails
- Adapting designs from Sketch
- Getting real good at responsive

## Setting up multiple instances of of the app

The software we created for 3rd party organizations is hosted by [CivicEngine](https://www.civicengine.com/). CivicEngine provides largely the same functionality as BallotReady. It displays a ballot for a user based on their address. However, Civic Engine offers an opportunity for 3rd party organizations to customize their branding while showing data that pertains to their local election. In this sense, we're still using the BallotReady structure, but changing some visual elements, displaying different data, and (my favorite) introducing the Voter Turnout Tool.

The first major challenge here dealt with the overall architecture of the app. Since we needed to use the existing database structure (albeit different data) and largely the same UI, we decided to set up multiple instances of the BallotReady app, hosted and branded under a different name: CivicEngine. This presented quite a technical challenge to move from single tenancy to multitenancy. To be honest, that was beyond the scope of my experience and handled by those more senior than me. The challenge that this did present to me was creating a structure within the app that allowed for customization from the admin portal, so that BallotReady staff could easily control branding, data, and options shown on each 3rd-party website. Some examples of this customization include various user flows, custom CSS, images, URLs, social share options, and displaying different information based on whether an election is primary or general.

## Enter your address and find your ballot
<div class='blog-image' markdown='1'>
![Address screen](/images/turnout-tool/turnout-tool-1.gif)
</div>

The first step for the user is to enter their address. This functionality was already built into the main BallotReady app. During a national election, such as the one we had in 2016, the user would enter their address and get their full local ballot. Now that those elections are over, we don't necessarily have data for every single local election around the country. But if the user is on a 3rd party site hosted by CivicEngine (BallotReady's alias), they have likely been sent there because they live in an area that we are covering.

## Create a plan to vote
<div class='blog-image' markdown='1'>
  ![Plan to vote screen](/images/turnout-tool/turnout-tool-2.gif)
</div>

If there is, in fact, a ballot for this address (meaning there is an upcoming local election that we are covering), the user will see this screen with their ballot. The new feature here is the orange button in the bottom right corner that prompts a modal for the user to begin the Voter Turnout Tool. These subdomains are also branded to clients. Anywhere saying "UniversityX" or "NonProfitX", would be replaced with client branding.

## Find your election day and polling place

<div class='blog-image' markdown='1'>
  ![Polling place screen](/images/turnout-tool/turnout-tool-3.gif)
</div>

Next, the user will see their election day and polling place. However, if there is early voting, the user will be shown a calendar where they can choose either an early voting day or voting day itself.

## Schedule a time to vote
<div class='blog-image' markdown='1'>
  ![Time to vote screen](/images/turnout-tool/turnout-tool-4.gif)
</div>

The user is then prompted to choose a time to vote. This time, of course, is unofficial. It's just for the sake of sending reminders to the user with their self-designated voting time. We do, however, control for the polling place hours by only showing voting times that are available.


## Get reminders
<div class='blog-image' markdown='1'>
  ![Get reminders screen](/images/turnout-tool/turnout-tool-5.gif)
</div>

This was probably my favorite screen because it has a great combination of design and JavaScript challenges. This screen required lots of visual cues for the user such as active icons, hiding and showing different inputs based on user selections, and submission confirmation messages. I also learned to create .ics downloads and Google calendar appointments, and to use Mandrill to send emails on the back end.

## Done and share!
<div class='blog-image' markdown='1'>
  ![Share screen](/images/turnout-tool/turnout-tool-6.gif)
</div>

Finally, this screen is displayed to the user upon completion of the VTT, giving the user a chance to share their voting plan.

## Growth, challenges, and next steps with React.
Although the VTT is still a work in progress, I'm very happy with the outcome so far. From this project, I've gained a great understanding of building components and using JSX. I'm happy to stop building hacky UIs with jQuery. React certainly makes my front-end designs more organized and sustainable. One of my biggest challenges with React is the inception-level confusion of building components within components within components. I think that the better I get at passing props and state management, the more this confusion will wane. This is what I love (and sometimes hate, but mostly love) about software development; there's always something new to learn.

