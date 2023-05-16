"use strict";

const inputPassEl = document.querySelector(".sign-right-input-pass");
const inputRepassEl = document.querySelector(".sign-right-input-repass");
inputRepassEl.addEventListener("input", (e) => {
    if (inputRepassEl.value === inputPassEl.value) {
        inputRepassEl.style.border = "2px solid #32CD32";
        inputPassEl.style.border = "2px solid #32CD32";
    } else {
        inputRepassEl.style.border = "2px solid #FF0000";
        inputPassEl.style.border = "2px solid #FF0000";
    }
});

const rating = document.querySelector(".rating");
const ratingItem = document.querySelectorAll(".rating_item");
rating.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("rating_item")) {
        target.classList.add("active", "current_active");
    }
});
rating.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.classList.contains("rating_item")) {
        removeClass(ratingItem, "active");
        target.classList.add("active");
        mouseOverActiveClass(ratingItem);
    }
});

rating.addEventListener("mouseout", (e) => {
    addClass(ratingItem, "active");
    mouseOutActiveClass(ratingItem);
});

function removeClass(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.remove(arguments[j]);
        }
    }
}

function addClass(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.add(arguments[j]);
        }
    }
}

function mouseOverActiveClass(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains("active")) {
            break;
        } else {
            arr[i].classList.add("active");
        }
    }
}

function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].classList.contains("current_active")) {
            break;
        } else {
            arr[i].classList.remove("active");
        }
    }
}