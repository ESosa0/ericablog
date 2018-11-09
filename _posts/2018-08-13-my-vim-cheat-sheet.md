---
layout: post
title: My Vim Cheat Sheet
author: Erica Sosa
tags: [vim]
excerpt: 
permalink: /blog/:title
---
![Vim Adventures](/images/vim_adventures.png)
*This is the screen you see when you beat Vim Adventures. (Yeah, I beat Vim Adventures! :raised_hands: )*{:.image-caption}

After my one year as an API Specialist at Braintree, I  applied for the internal Developer Apprentice position, and guess what? I got the job! I was (and am) so excited to begin the next phase of my career by spending the next 7 months training on various engineering teams, after which I will (if everything goes according to plan) permanently join an engineering team. Spending the next quarter-year learning to develop enterprise-ready software is just about the most exciting thing I can imagine right now. Getting paid to learn? Yes, please! 

I'm aware that the months ahead will be a challenge and I'm ready for that. But there is one thing I need to know going in that will make my life a lot easier... VIM! At Braintree, Vim is the editor of choice, as most developement is done by pairing on a tmux. During the last year at Braintree, I have used Vim here and there, and only when necessary. Since most of my debugging and devlopement work has been on the operations side, not the product side, I've been free to use whichever text editor or IDE that I prefer (which has heretofore been Visual Studio Code). Now, however, as I move over to Product, it's going to be **all Vim all the time**. 

I've found it difficult to concentrate on coding while I'm also using Vim. I'm glad popular wisdom now declares multitasking a myth, because I've always felt that in my heart to be true! Since it's too hard to learn Vim and code at the same time, I decided to spend a few days on JUST Vim. I did the `vimtutor` tutorial. If you're not familiar, just open up a terminal and type in `vimtutor` and you'll see what I'm talking about. That was super helpful. I'm also playing with [Vim Adventures](https://vim-adventures.com/) and reading [Practical Vim](https://www.safaribooksonline.com/library/view/practical-vim-2nd/9781680501629/). And I've started to do all my development with Vim, including writing this blog (and that big long markdown table too)!

I've been keeping notes in a notebook, paper and pen style (not with the notes app on my computer). Writing things by hand always helps me remember. But now I'd like to create an easy to reference cheat sheet, which is exactly what I'm going to do in this blog entry. So here are all the Vim commands I've learned so far, and I will add more as I learn them!

| Moving around | 
| ----------- | ----------- |
| `w` | Moves cursor forward one word |
| `$` | Moves cursor to the end of the line |
| `0` | Move curor to start of line |
| `ctrl + o` | Go back to the last place your cursor was |
| `ctrl + i` | Undo ctrl + o |
| `ctrl + b` | Page up |
| `ctrl + f` | Page down |

| Deleting stuff |
| ----------- | ----------- |
| `x` | Delete at character |
| `dw` | Delete word |
| `d$` | Deletes until the end of the line |
| `d2w` | Delete 2 words (or however many you want) |
| `dd` | Delete line |
| `dG` | Delete everything after the curosor |
| `dgg` | Delete everything before the curosor |
| `2dd` | Delete two lines (or however many you want) |
| `ce` | Deletes word, then places in insert mode |
| `cc` | Deletes line, then places in insert mode |

| Inserting stuff |
| ----------- | ----------- |
| `A` | Append to the end of a line |
| `r` | Replace one character |
| `R` | Replace several characters |
| `~` | Replaces character with capitalized version |

| Copy/paste stuff |
| ----------- | ----------- |
| `"{char}d` | Deletes item and saves to register named {char} |
| `"{char}p` | Pastes item from register named {char} |
| `y` | Copy |
| `yy` | Copy the whole line |
| `p` | Paste |

| Undoing/redoing |
| ----------- | ----------- |
| `u` | Undo | 
| `ctrl + r` | Redo |
| `U` | Undo everything on a line |

| File stuff |
| ----------- | ----------- |
| `:!` | Allows you to run a terminal command |
| `:w FILENAME` | Saves contents to a new file |
| `:!rm FILENAME` | Removes file |
| `:r FILENAME` | Pastes contents of a file |
| `ctrl + g` | Shows file path |

| Searching/Replacing |
| ----------- | ----------- |
| `/` | Search forward |
| `?` | Search backward |
| `n` | Go to next found item - forward |
| `N` | Go to next found item - backward |
| `:s/old/new/g` | Substitutes everything on that line |
| `:%s/old/new/g` | Substitutes everything in the file |
| `:%s/old/new/gc` | Substitutes everything in the file, but prompts you before changing |
| `:#,#s/old/new/g` | Substitutes everything within a certain range, the #'s specify the line numbers in the range |
| `f{char}` | Finds the next instance of the {char}. `F` does the same thing in reverse. |
| `t{char}` | Moves the cursor to the character before the {char}. `F` does the same thing in reverse. |
| `;` | Repeats the last f/F/t/T command. |
| `,` | Reverses the last f/F/t/T command. |

### Update
#### 11/9/2018

I've now been in the apprenticeship for 2 months. I've used Vim everyday during that period and I'm happy to report that I've gotten pretty proficient. (And I actually really like it!) I've gotten so used to using Vim that concentrating on Vim + coding is no longer an issue and I can easily pay attention to both! :smiley_cat:
