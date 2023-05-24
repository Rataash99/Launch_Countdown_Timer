# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./Screenshots/Screenshot%202023-05-24%20at%202.46.19%20PM.png)
![](./Screenshots/Screenshot%202023-05-24%20at%202.47.12%20PM.png)

### Links

- Solution URL: [solution URL](https://github.com/Rataash99/Launch_Countdown_Timer)
- Live Site URL: [Add live site URL here](https://nimble-cascaron-b84fda.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind CSS
- Mobile-first workflow

### What I learned

I've used tailwind CSS after a long time so the project helped me refresh those long forgotten concepts and also understand JS Date function.

```html
<div class = 'days-content relative flex flex-col gap-2 sm:gap-3 min-w-[4.5rem]'>
          <div class = 'flex flex-col shadow-inner shadow-black rounded-xl'>
            <div class = 'bg-[#2a2c47] rounded-lg px-10 py-5 sm:px-16 sm:py-8 lg:px-[5rem] lg:py-10 transition-all duration-1000'></div>
            <div class = 'bg-[#343650] rounded-lg px-10 py-5 border-b-8 border-black sm:border-b-[0.6rem] lg:border-b-[0.7rem] sm:px-16 sm:py-8 lg:px-[5rem] lg:py-10 transition-all duration-1000'></div>
          </div>
          <div class = 'absolute top-[1.3rem] text-4xl text-[#fb6087] left-[1.1rem] sm:text-7xl sm:left-[1.3rem] sm:top-[1.6rem] lg:text-8xl lg:left-[1.2rem] lg:top-[1.9rem] transition-all duration-1000' id = 'hours'></div>
          <span class = 'text-[9px] text-[#8486a9] font-light tracking-[3px] uppercase text-center sm:text-[13px] transition-all duration-1000'>hours</span>
        </div>
```
```css
body::before{
    position: absolute;
    content: "";
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-image: url('/images/bg-stars.svg');
    background-position: top;
}
```
```js
let currDate = new Date().getTime();
    let dist = countdown - currDate;
    let d = Math.floor(dist / (1000 * 60 * 60 * 24));
    let h = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(dist % (1000 * 60) / (1000));
```

### Continued development

Planning to make more projects using REACT and Tailwind and also contributing to open source with whatever knowledge I've acquired till now.
and keep on learning.

## Author

- Frontend Mentor - [@Rataash99](https://www.frontendmentor.io/profile/Rataash99)
- ShowwCase - [@rataash99](https://www.showwcase.com/rataash99)
- Twitter - [@RohitSingh11299](https://twitter.com/RohitSingh11299)
- Github - [Rataash99](https://github.com/Rataash99)

## Acknowledgments

I am very delighted to be a part of frontend mentor community and I'm thanks to all amazing folks providing with such amazing projects. 