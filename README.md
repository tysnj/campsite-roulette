# Front-End News
Deployment site: front-end-news.surge.sh

#### Overview
This application is designed to curate a list of posts/stories/articles related to Front-End technologies. The idea for this came about from interacting with the Hacker News website, as there is a constant flow of information that is hard to keep up with. I felt the UX could be improved with the ability to track your interactions accordingly, so I created this app for users to save articles to read later, or mark them as read if they want to keep track.  This is powered by data from the Hacker News API built on Algolia's search platform.

Simply click an article card to open up the associated link. Within each card, you can save the article with the bookmark icon in the top left corner, or mark as read with the icon in the top right corner; You'll then find your saved and read articles on their respective pages.


![GIF showing the app](public/assets/FEN.gif)


#### Author
[Tyson McNutt](https://github.com/tysnj "Tyson's GitHub")


#### Technology
* JavaScript
* HTML/CSS
* React; React Router; React-Icons; Styled Components
* Cypress Integration Testing


## Installation
1. Clone down this repo with `git clone git@github.com:tysnj/front-end-news.git`
2. Change into the new directory with `cd front-end-news/`
2. Run `npm i` to install dependencies
3. Run `npm start` to run the program


## Goals
My goal of doing this project is to demonstrate and build upon my foundational knowledge in writing applications using the React framework while also incorporating styled components to challenge myself. While doing so, I set out to build an interactivie multi-page application that is thoroughly tested.


## Wins
* Learning & incorporating new technologies into a single application
* Hardened skills in building a multi-page application
* Creating something that may be found useful!


## What's Next
* Utilize local storage so users can come pick up where they left off
* Incorporate unit testing of helper functions
* Redesign styling to be responsive for all screen sizes and devices
* I'll be incorporating keyword filters so users can filter by the various technologies
* As my breadth of knowledge on the various technologies grows, I plan to add additional keywords to API requests to incorporate more and more technologies
* Refactor the component tree to be more dynamic, modular, and scalable in page display

