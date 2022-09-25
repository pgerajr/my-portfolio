"use strict";

// GLOBAL DECLARATIONS

const root = document.querySelector(":root"); // Selecting the ROOT to change PSEUDO ELEMENTS properties values
const menuJs = document.querySelector(".js-menu");
const projBtn = document.querySelector(".projects__btn");
const projList = document.getElementsByClassName("projects__list");

let initialMenuState = false;

// CREATING JS MENU

function menuJscreation() {
  menuJs.innerHTML = `<p class="navigation__text-js hidden-js">This menu was built using JS</p>
  <div class="menu-js hide-menu">
  <ul class="menu-js__list">
  <a class="menu-js__list-item" href="#hero"><li>Home</li></a>
  <a class="menu-js__list-item" href="#projects"><li>Projects</li></a>
  <a class="menu-js__list-item" href="#about"><li>About Me</li></a>
  <a class="menu-js__list-item" href="#tech"
  ><li>Technologies</li></a
  >
  <a class="menu-js__list-item" href="#social-media"
  ><li>Social Media</li></a
  >
  </ul>
  </div>`;
}

menuJscreation();

// SELECTING ELEMENTS AFTER JS MENU IS CREATED

const menu = document.querySelector(".menu-js");
const btnShowMenu = document.querySelector(".navigation__btn-js");
const navText = document.querySelector(".navigation__text-js");
const navMenu = document.querySelector(".navigation__menu-js");
const checkboxMenu = document.querySelector("#navi-toggle");
const clickHereLeft = document.querySelector(".left");
const clickHereRight = document.querySelector(".right");
const main = document.querySelector(".main");

// SHOWS AND HIDES JS MENU

function changeMenuState() {
  if (initialMenuState == false) {
    clickHereLeft.style.opacity = 1;
    clickHereRight.style.opacity = 1;
    navText.classList.add("hidden-js");
    menu.classList.add("hide-menu");
    root.style.setProperty("--border-bottom", "2px solid black");
    root.style.setProperty("--rotate-right", "none");
    root.style.setProperty("--rotate-left", "none");
    initialMenuState = true;
  } else {
    clickHereLeft.style.opacity = 0;
    clickHereRight.style.opacity = 0;
    checkboxMenu.checked = false;
    navText.classList.remove("hidden-js");
    menu.classList.remove("hide-menu");
    root.style.setProperty("--border-bottom", "none");
    root.style.setProperty(
      "--rotate-right",
      "translateY(0.6rem) rotate(135deg)"
    );
    root.style.setProperty(
      "--rotate-left",
      "translateY(-0.8rem) rotate(-135deg)"
    );
    initialMenuState = false;
  }
}

function collapseMenu() {
  clickHereLeft.style.opacity = 1;
  clickHereRight.style.opacity = 1;
  navText.classList.add("hidden-js");
  menu.classList.add("hide-menu");
  root.style.setProperty("--border-bottom", "2px solid black");
  root.style.setProperty("--rotate-right", "none");
  root.style.setProperty("--rotate-left", "none");
  initialMenuState = true;
}

function expandMenu() {
  clickHereLeft.style.opacity = 0;
  clickHereRight.style.opacity = 0;
  checkboxMenu.checked = false;
  navText.classList.remove("hidden-js");
  menu.classList.remove("hide-menu");
  root.style.setProperty("--border-bottom", "none");
  root.style.setProperty("--rotate-right", "translateY(0.6rem) rotate(135deg)");
  root.style.setProperty(
    "--rotate-left",
    "translateY(-0.8rem) rotate(-135deg)"
  );
  initialMenuState = false;
}

// WHEN RELOADING THE PAGE MAKES SURE THE MENU IS COLLAPSED

changeMenuState();

// CALLS FUNCTION TO SHOW AND HIDE JS MENU

btnShowMenu.addEventListener("click", changeMenuState);
main.addEventListener("click", collapseMenu);

// SHOW DETAIL OF EACH PROJECT ITEM

for (let i = 0; i < projList.length; i++) {
  projList[i].querySelectorAll(".projects__btn").forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.toggle("collapse");
      if (e.innerText === "Expand for more info...") {
        e.innerText = "Collapse";
      } else {
        e.innerText = "Expand for more info...";
      }
    });
  });
}
