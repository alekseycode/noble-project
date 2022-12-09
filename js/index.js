let tl = gsap.timeline();
let featureDivs = document.querySelectorAll(".feature");

gsap.from(featureDivs, {
  scrollTrigger: {
    trigger: featureDivs,
  },
  stagger: 0.7,
  duration: 3,
  opacity: 0,
});

//Adding parallax effect\/
const hero = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  hero.style.backgroundPositionY = window.scrollY * 0.7 + "px";
});
