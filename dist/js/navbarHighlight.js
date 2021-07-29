let home = document.getElementById("home");
let about = document.getElementById("about");
let about_btn = document.getElementById("about_btn");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");
let micha = document.getElementById("micha");
let my_resume = document.getElementById("my_resume");
let submit = document.getElementById("submit");

viewList = [home, resume, contact, about];

addCurrentTag = (element) => {
  element.classList.add("current");
  viewList
    .filter((it) => element !== it)
    .forEach((viewListItem) => {
      viewListItem.classList.remove("current");
    });
};

window.addEventListener(
  "scroll",
  function () {
    if (isInViewport(about_btn)) {
      addCurrentTag(home);
    }
    if (isInViewport(micha)) {
      addCurrentTag(about);
    }
    if (isInViewport(my_resume)) {
      addCurrentTag(resume);
    }
    if (isInViewport(submit)) {
      addCurrentTag(contact);
    }
  },
  false
);
