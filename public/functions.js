gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(scrollTo);

const sidebar = document.getElementById("sidebar");

const goTo = (ctx) => {
  gsap.to(window, { duration: 1, scrollTo: `.${ctx}`, ease: "expo.inOut" });
  sidebar.classList.remove("open");
};

let i = 0;
const gallery = document.getElementById("projects-cont");
const right = document.getElementById("right");
const left = document.getElementById("left");

const project_indicators = Array.from(
  document.getElementById("project-indicator").children
);

const changeProject = (k) => {
  project_indicators.forEach((item) => item.classList.remove("active"));

  project_indicators[k].classList.add("active");
};

const slideLeft = () => {
  if (i > 0) {
    i--;
    gallery.style.transform = `translateX(-${(100 / 3) * i}%)`;
    left.classList.remove("disabled");
    right.classList.remove("disabled");
    changeProject(i);
  }

  if (i <= 0) left.classList.add("disabled");
};

const slideRight = () => {
  if (i < 2) {
    i++;
    gallery.style.transform = `translateX(-${(100 / 3) * i}%)`;
    right.classList.remove("disabled");
    left.classList.remove("disabled");
    changeProject(i);
  }
  if (i >= 2) right.classList.add("disabled");
};
