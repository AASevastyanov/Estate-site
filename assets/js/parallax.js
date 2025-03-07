let lastKnownScrollPosition = 0;
let ticking = false;
const parallax = document.querySelector(".parallax");

function doParallax(scrollPos) {
  parallax.style.backgroundPositionY = `${scrollPos * 0.3}px`;
}

window.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doParallax(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
});
