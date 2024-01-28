# tbcxusaid

# React Course Assignment - Page Recreation

## Description
This project is a recreation of a page from the https://www.tbcacademy.ge/usaid website. The assignment involves replicating the layout and functionality of a specific page using HTML, CSS and JavaScript.

## Table of Contents
- [Important Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Important Features
- [ ] Slider
    An automatic slider with fade-in and fade-out effects, along with the ability to pause/resume when hovering over the slider. The slider also includes manual control through arrows or dots, although the corresponding code is not provided in this snippet.
    The fadeIn and fadeOut functions are responsible for adjusting the opacity of slides based on their index.
    The sliderIndex variable keeps track of the current slide index.
    The setInterval function is used to create an automatic slider that fades in and out slides at a regular interval.
    The DOMContentLoaded event listener ensures that the initial fade-in occurs when the DOM content has fully loaded.
    Additional event listeners for mouse enter and mouse leave events on the slider pause and resume the automatic slider, respectively.
    This code creates a simple automatic slider with fade-in and fade-out effects, along with the ability to pause/resume when hovering over the slider. The slider also includes manual control through arrows or dots, although the corresponding code is not provided in this snippet.

- [FAQ Section]
    This is a FAQ Section  where clicking on a question toggles the visibility of its answer. 
    The CSS class 'open' is used to style the arrow icon differently when the answer is open.
    The toggleAnswer function takes a parameter question, which represents the HTML element of the question.
    It uses the nextElementSibling property to get the next sibling element, which is assumed to be the answer to the question.
    The function then finds the arrow icon within the question element using querySelector('.arrow').
    It checks the current height of the answer element. If the height is 'auto', it means the answer is open, so the function closes it by setting the height to '0px' and removing the 'open' class from the arrow icon.
    If the height is not 'auto' (i.e., the answer is closed), the function opens the answer by setting the height to 'auto' and adding the 'open' class to the arrow icon.

- [ ] Policies Side Bar
    This feature  provides a mechanism to show and hide a sidebar menu with an overlay, creating a smooth transition effect. The sidebar opens from the right, and the overlay covers the entire page when the sidebar is active. The background color of the body changes when the sidebar is toggled. The closeMenu function is designed to handle closing the sidebar based on the window width.
    The toggleMenu function is responsible for toggling the visibility of the sidebar menu and overlay. It adjusts the right property of the sidebar and the display property of the overlay.
    The background color of the body is also toggled between transparent (rgba(0, 0, 0, 0.5)) and white based on the current state.
    The closeMenu function is used to close the sidebar menu. It sets the right property of the sidebar based on the window width and hides the overlay.

- [ ] Hamburgermenu
    The menu appears when content width is diminished to 600 px.
    The updateBurgerIcon function is responsible for toggling the appearance of the burger menu icon and the associated menu elements.
    It uses the classList.toggle method to add or remove the 'active' class on the burger icon.
    Depending on whether the 'active' class is present or not, the function either animates the burger icon to its initial state (closed) or its 'open' state.
    CSS classes (burger-top, burger-bot, etc.) are used to style and animate the burger icon and menu components accordingly.
    The function also includes transitions and delays to achieve a smooth and visually appealing effect when toggling the burger menu.

## Technologies Used
- HTML
- CSS
- JavaScript

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mari-ku/tbcxusaid.git