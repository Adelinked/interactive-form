# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshots

![](./https://i.postimg.cc/5NzPwqPT/Screenshot-2.png)
![](./https://i.postimg.cc/4N8S4NSN/Screenshot-1.png)
![](./https://i.postimg.cc/0NHtxtWW/Screenshot-3.png)
![](./https://i.postimg.cc/nLvzf5hZ/Screenshot-4.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Adelinked/interactive-form)
- Live Site URL: [Add live site URL here](https://adelinked.github.io/interactive-form/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

What i leaned from this challenge is how to make a border for an html element (with border radius) that has a gradient color.

```css
.inputClass:focus,
.inputClass:hover,
.inputClass:active {
  cursor: pointer;
  border: double 1px transparent;
  /* first gradient is for card background, second for border background */
  background-image: linear-gradient(white, white), var(--color-active-input);
  background-clip: padding-box, border-box;
  background-origin: border-box;
}
```

### Continued development

- Improve the web pages buiding process for better results in the best delays.
- Use more frequently the third party libraries like formik and yup for forms validation.

### Useful resources

- [Create React App](https://create-react-app.dev/) - Set up a modern web app by running one command.

## Author

- Website - [Adelinked](https://adelinked.netlify.app)
- Frontend Mentor - [@AAdelinked](https://www.frontendmentor.io/profile/Adelinked)
