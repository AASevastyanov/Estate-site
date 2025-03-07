const targetElement = document.querySelector(".intro");
const logo = document.querySelector(".logo");


let callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      logo.classList.add("hidden");
    } else {
      entry.target.classList.remove("visible");
      logo.classList.remove("hidden");
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.7,
});

observer.observe(targetElement);

