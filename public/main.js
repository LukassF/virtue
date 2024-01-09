import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const scroll_down = document.querySelector("#scroll-down");

scroll_down.addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: ".hero", ease: "expo.inOut" });
});

const hero_main = document.querySelector(".hero");
const navbar = document.getElementById("navbar");
const sidebar = document.getElementById("sidebar");

window.onscroll = () => {
  if (window.scrollY >= hero_main.getBoundingClientRect().height) {
    navbar.style.position = "fixed";
    sidebar.style.position = "fixed";
  } else {
    navbar.style.position = "absolute";
    sidebar.style.position = "absolute";
  }
};

const open_sdbr = document.getElementById("open_sdbr");
const close_sdbr = document.getElementById("close_sdbr");

open_sdbr.addEventListener("click", () => {
  sidebar.classList.add("open");
});

close_sdbr.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

gsap.from(".pi1", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  yPercent: -100,
  opacity: 0,
  scale: 0.5,
});

gsap.from(".hero-el", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  xPercent: -100,
  opacity: 0,
  // scale: 0.5,
});

gsap.from(".profile-img", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
});

gsap.from(".pi2", {
  scrollTrigger: { trigger: ".projects", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  yPercent: -100,
  opacity: 0,
  scale: 0.5,
});

gsap.from(".project-img", {
  scrollTrigger: { trigger: ".projects", start: "top center" },
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
  scale: 0.9,
});

gsap.from(".project-el", {
  scrollTrigger: { trigger: ".projects", start: "top center" },
  duration: 0.5,
  stagger: 0.1,
  rotate: 5,
  opacity: 0,
});

gsap.from("#background-arrows", {
  scrollTrigger: { trigger: ".projects", start: "top center" },
  duration: 0.8,
  opacity: 0,
});

gsap.from(".project-el-button", {
  scrollTrigger: { trigger: ".projects", start: "top center" },
  duration: 0.5,

  scale: 0.5,
  opacity: 0,
});

gsap.from(".pi3", {
  scrollTrigger: { trigger: ".services", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  yPercent: -100,
  opacity: 0,
  scale: 0.5,
});

gsap.from(".services-el", {
  scrollTrigger: { trigger: ".services", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  xPercent: -20,
  opacity: 0,
});

gsap.from(".pi4", {
  scrollTrigger: { trigger: ".skills", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  yPercent: -100,
  opacity: 0,
  scale: 0.5,
});

gsap.from(".skills-el", {
  scrollTrigger: { trigger: ".skills", start: "top center" },
  duration: 0.8,
  stagger: 0.05,
  xPercent: -20,
  opacity: 0,
});

gsap.from(".skills-image", {
  scrollTrigger: { trigger: ".skills", start: "top center" },
  duration: 0.8,
  delay: 0.3,
  opacity: 0,
});

gsap.from(".pi5", {
  scrollTrigger: { trigger: ".contact", start: "top center" },
  duration: 0.8,
  stagger: 0.1,
  yPercent: -100,
  opacity: 0,
  scale: 0.5,
});

gsap.from(".form", {
  scrollTrigger: { trigger: ".contact", start: "top center" },
  duration: 0.8,
  opacity: 0,
  rotate: "10deg",
});
