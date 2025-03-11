const targetWrapper = document.querySelector(".intro-wrapper");
const targetElement = document.querySelector(".intro");
const logo = document.querySelector(".logo");


let callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetElement.classList.add("visible");
      logo.classList.add("hidden");
    } else {
      targetElement.classList.remove("visible");
      logo.classList.remove("hidden");
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.7,
});

observer.observe(targetWrapper);

