let lastScroll = 0;
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  requestAnimationFrame(() => {
    document.querySelector(".parallax").style.backgroundPositionY =
      -(scrollPosition * 0.3) + "px";
  });
  lastScroll = scrollPosition;
});
