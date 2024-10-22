// let shapes = document.querySelectorAll('.shape');

// document.addEventListener('visibilitychange', () => {
//     if (document.hidden) {
//         shapes.forEach(element => {
//             element.classList.add('hidden');
//         });
//     } else {
//         shapes.forEach(element => {
//             element.classList.remove('hidden');
//         });
//     }
// });

let erfahrungen = document.querySelector(".erfahrungen");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target == erfahrungen && entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(erfahrungen);

let nameDiv = document.querySelector(".name-container");
let nameH1 = document.querySelector(".name-container h1");
let header = document.querySelector("header");
let logo = document.querySelector(".logo");

let nameBoundingRectY = nameH1.getBoundingClientRect().y;

window.addEventListener("scroll", () => {
  if (window.scrollY > nameBoundingRectY) {
    if (nameDiv.classList.contains("name-animate-reverse")) {
      nameDiv.classList.remove("name-animate-reverse");
    }
    if (logo.classList.contains("logo-animate-reverse")) {
      logo.classList.remove("logo-animate-reverse");
    }
    if (header.classList.contains("header-animate-reverse")) {
      header.classList.remove("header-animate-reverse");
    }
    nameDiv.classList.add("name-animate");
    logo.classList.add("logo-animate");
    header.classList.add("header-animate");
  } else {
    if (nameDiv.classList.contains("name-animate")) {
      nameDiv.classList.remove("name-animate");
      nameDiv.classList.add("name-animate-reverse");
    }
    if (logo.classList.contains("logo-animate")) {
      logo.classList.remove("logo-animate");
      logo.classList.add("logo-animate-reverse");
    }
    if (header.classList.contains("header-animate")) {
      header.classList.remove("header-animate");
      header.classList.add("header-animate-reverse");
    }
  }
});
