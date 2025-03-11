let lastScroll = 0;
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;



  if (window.innerWidth > 1200) {
    document.querySelector(".parallax").style.backgroundPositionY =
      -(scrollPosition * 0.19) + "px";
      
  } else if (window.innerWidth > 992){
    document.querySelector(".parallax").style.backgroundPositionY =
      -(scrollPosition * .1) + "px";
  } else if (window.innerWidth > 992){
    document.querySelector(".parallax").style.backgroundPositionY =
      -(scrollPosition * .05) + "px";
  }
  });
  lastScroll = scrollPosition;
