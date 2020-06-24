const navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
};

function isAnyPartOfElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

let home = document.getElementById("home");
let about = document.getElementById("about");
let about_btn = document.getElementById("about_btn");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");
let micha = document.getElementById("micha");
let my_resume = document.getElementById("my_resume");
let submit = document.getElementById("submit");
// console.log(my_resume);

window.addEventListener(
  "scroll",
  function (event) {
    if (isInViewport(about_btn)) {
      home.classList.add("current");
      resume.classList.remove("current");
      contact.classList.remove("current");
      about.classList.remove("current");
    }
    if (isInViewport(micha)) {
      home.classList.remove("current");
      resume.classList.remove("current");
      contact.classList.remove("current");
      about.classList.add("current");
    }
    if (isInViewport(my_resume)) {
      home.classList.remove("current");
      resume.classList.add("current");
      contact.classList.remove("current");
      about.classList.remove("current");
    }
    if (isInViewport(submit)) {
      home.classList.remove("current");
      resume.classList.remove("current");
      contact.classList.add("current");
      about.classList.remove("current");
    }
  },
  false
);

home.addEventListener("click", () => {
  home.classList.add("current");
  resume.classList.remove("current");
  contact.classList.remove("current");
  about.classList.remove("current");
});

about.addEventListener("click", () => {
  home.classList.remove("current");
  resume.classList.remove("current");
  contact.classList.remove("current");
  about.classList.add("current");
});

about_btn.addEventListener("click", () => {
  home.classList.remove("current");
  resume.classList.remove("current");
  contact.classList.remove("current");
  about.classList.add("current");
});

contact.addEventListener("click", () => {
  home.classList.remove("current");
  resume.classList.remove("current");
  contact.classList.add("current");
  about.classList.remove("current");
});

resume.addEventListener("click", () => {
  home.classList.remove("current");
  resume.classList.add("current");
  contact.classList.remove("current");
  about.classList.remove("current");
});
