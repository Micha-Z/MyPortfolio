const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const resumeBtn = document.getElementById("resume");
const contactBtn = document.getElementById("contact");

const getToKnowMeBtn = document.getElementById("gtnm-btn");
const profilePicture = document.getElementById("profile-picture");
const myResumeSection = document.getElementById("my-resume");
const submitBtn = document.getElementById("submit");

const viewList = [homeBtn, resumeBtn, contactBtn, aboutBtn];

const isInViewport = (elem) => {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const addCurrentTag = (element) => {
  element.classList.add("current");
  viewList
    .filter((viewListItem) => element !== viewListItem)
    .forEach((viewListItem) => {
      viewListItem.classList.remove("current");
    });
};

window.addEventListener(
  "scroll",
  function () {
    if (isInViewport(getToKnowMeBtn)) {
      addCurrentTag(homeBtn);
    }
    if (isInViewport(profilePicture)) {
      addCurrentTag(aboutBtn);
    }
    if (isInViewport(myResumeSection)) {
      addCurrentTag(resumeBtn);
    }
    if (isInViewport(submitBtn)) {
      addCurrentTag(contactBtn);
    }
  },
  false
);
