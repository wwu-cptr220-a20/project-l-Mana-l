'use strict';

// variable 'button' to represent <button> element
let button = document.getElementById("dark_mode");

// function to change classes & create dark mode


function darkModeCallBack() {
    let blogContainer = document.querySelectorAll(".blog-content, .container, .navbar, .dropdown-bookmark-content");
    let paragraphContainer = document.querySelectorAll("p, h2, h1, li, .dropdown-bookmark, .navbar a, .dropdown-bookmark-btn");
    let contentContainter = document.getElementsByClassName("blogTitle");

    blogContainer.forEach(each => {
        each.classList.toggle("bg-dark");
    })

    paragraphContainer.forEach(each => {
        each.classList.toggle("text-white")
    })
    document.querySelector("body").classList.toggle("body-dark");
}

// event listener to the 'button' element that looks for 'click' type events
button.addEventListener("click", darkModeCallBack);