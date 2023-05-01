const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");
const btnHamburgerHandler = function () {
  if (header.classList.contains("open")) {
    //closing hamburger menu
    //when it contains => remove it and fade-out(remove overlay)
    header.classList.remove("open");
    fadeElements.forEach((ele) => {
      ele.classList.remove("fade-in");
      ele.classList.add("fade-out");
    });
  } else {
    //opening hamburger menu
    //else, when it does not contain => add it and fade-in(add overlay)
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElements.forEach((ele) => {
      ele.classList.remove("fade-out");
      ele.classList.add("fade-in");
    });
  }
};

btnHamburger.addEventListener("click", btnHamburgerHandler);
