---
layout: post
title: From vintage radio to internet radio
author: Erica Sosa
tags: [hardware, raspberrypi, hifiberry, volumio]
excerpt: How I souped up an old radio and turned it into a shiny new internet radio and bluetooth speaker that could be controlled from a smartphone.
permalink: /blog/:title
---
![vintage radio and parts](/images/radio-blog/vintage-radio.JPG)

Over the holidays last year I was flipping through a magazine, perusing the “holiday gifts” section. I saw a nicely designed, sleek little wooden box that functioned as an internet radio. It had a bit of a mid-century modern look, which is all the rage right now. I thought it was pretty cool and I showed it to my partner, whose response was “but wouldn’t it be cooler if it was actually a vintage radio converted into an internet radio?” And I had to admit, that would indeed be cooler.

So that inspired our idea to soup up an old radio into a shiny new internet radio and bluetooth speaker that we could control from our smartphones. We’re programmers, not antique restoration specialists, so we wanted to find a radio that was in good physical shape, but that didn’t work so well anymore. We turned to Ebay to find a candidate.

![vintage radio for sale on ebay](/images/radio-blog/vintage-radio.png)

We got this gal. Isn’t she a beauty? In some last-second bidding, she was ours for just $38.73 + shipping.

That was the easy part. Next we had to figure out how to make the old thing work. After some research, we found [this guide](http://www.bobrathbone.com/raspberrypi/Raspberry%20PI%20Vintage%20Radio.pdf "raspberry pi internet radio guide") which helped point us in the right direction of which hardware to use.

## What you need

1. [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi "raspberry pi wikipedia")
  - The Raspberry Pi is a pretty standard little computer and can be acquired for the low price of $40.
2. [HiFiBerry Amp+](https://www.hifiberry.com/shop/boards/hifiberry-amp-plus/ "hifi berry website")
  - The HiFiBerry is a more specialized piece of hardware used as an amplifier for the Raspberry Pi. It’s more expensive at $70 after tax and shipping.
3. Mini SD card
   - You can get a 16 GB mini SD card anywhere for around $7.
4. [Volumio](https://volumio.org/ "volumio website")
  - Free software to power the internet radio.
5. Screwdriver
  - To open the radio

## How to do it

At the beginning this seemed like a big challenge to me. I had never actually messed with hardware before. But, actually it was pretty straightforward minus a little bit of debugging at the end. We essentially followed the instructions from HiFiBerry and Volumio, which went like this:

### Download and install the software

Install the software on the Raspberry Pi. You can follow the directions on the [Volumio quickstart guide](https://volumio.github.io/docs/User_Manual/Quick_Start_Guide.html). First, you need to download the software. Next, you will load it on the micro SD card (again following the specific directions from Volumio, because it’s more complicated than what I’m describing here) and insert the card into your Raspberry Pi.

### Open the radio

Open up the back of the radio and see what’s inside. Spoiler alert: it’s gonna be pretty cool. You’ll find a bunch of metal tubes connected by wires, and hopefully a speaker or two. We were not sure how this speaker was going to sound or whether or not we would need to replace it.

![inside the vintage radio](/images/radio-blog/opened-radio.JPG)

### Figure out which wires you need

We only needed the wires that connect to the speakers. We cut those and decided to leave the rest. The other wires connected to the knobs and dials on the front of the radio. Those are pretty rad, so we didn’t mess with them. We also thought we may want to try to hook them up later. So, for the time being, we only cut the speaker cables.

![inside the vintage radio](/images/radio-blog/cutting-wires.JPG)

I wore an oven mitt when I cut them because I thought it would somehow protect me from electric shock (even though it wasn’t plugged in. Can’t be too careful!)

### Connect the Raspberry Pi to the HiFiBerry

Follow the [instructions](https://www.hifiberry.com/firststeps/) from HiFiBerry on how to do this. You have to attach those little plastic things to the corners of the RaspberryPi.

![vintage radio and parts](/images/radio-blog/raspberrypi_and_hifiberry.JPG)

Then the HiFiBerry attaches right on top. You may have to squeeze it until it clicks into place.

![vintage radio and parts](/images/radio-blog/raspberrypi_and_hifiberry_connected.JPG)

### Connect the wires to the ports in the HiFiBerry

Sadly I didn't take any pictures of this part, so I will try to describe it the best that I can. If you've ever connected speaker wires, you will understand how to do this. Basically, you have to get the exposed wire to into the little ports and pinch it in there. Since we cut the wire ourselves, this requires a little bit of labor. We had to shave off the wire casing in order to get to the exposed wire. Just expose a centimeter or so, then pinch that bit into the ports. Also, be aware of the + and - wires and put them in the right spot.

### Find a nice spot to attach the unit

We didn't want our little computer hanging freely inside the big box, so we made a little makeshift home for it. We just reused the
RaspberryPi box and taped it to the top of the inside of the radio. Good enough!

![hardware attached to radio](/images/radio-blog/new_hardware_attached.JPG)

### Start the RaspberryPi

When you start the Raspberry Pi (by plugging it in), Volumio will create a wifi hotspot called Volumio with password: volumio2 (current as of the date of this posting). Once you’re connected to this hotspot, you can use your own computer and go to http://volumio.local. Here you will configure your wifi settings. Go to the cog wheel > network. Here you can connect to your home wifi.

### Troubleshooting

This should be all you have to do. However… it didn’t work for us and we had to troubleshoot. We realized that it wasn’t recognizing the HiFiBerry. After some Googling around, we discovered that there was a problem with the [HiFiBerry configuration](https://www.hifiberry.com/build/documentation/configuring-linux-3-18-x/) and we just had to adjust some settings in volumio: I2S DAC was OFF and no DAC Model was selected. Once we changed these things, everything worked swimmingly.

![volumio config](/images/radio-blog/volumio_config.png)

### Using Volumio

To use volumio, just go to http://volumio.local and you can access their ridiculously large selection of internet radio stations. We started listening to Hawaiian radio and it’s really very pleasant. You can also use your new machine as a bluetooth speaker, which should automatically appear on your phone.

This was a very cool project and I'm so glad we did it. Next steps would be figuring out how to connect up all the knobs and dials so that you could actually use them for something (not the original functions, but something similar perhaps). And tell your friends! I think we have a good idea for a side business here :moneybag: