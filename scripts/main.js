"use strict";

/*========== Show Menu ==========*/
const toggle = document.querySelector(".nav__toggle");
const close = document.querySelector(".nav__close");
const navigation = document.querySelector("nav");

toggle.addEventListener("click", () => {
    navigation.classList.add("open");
});

close.addEventListener("click", () => navigation.classList.remove("open"));

/**
 * Change background header
 * */
const scrollHeader = () => {
    const header = document.querySelector("#header");

    // When the scroll is greater than 50 viewport height
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);
