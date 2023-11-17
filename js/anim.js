let shapes = document.querySelectorAll('.shape');

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        shapes.forEach(element => {
            element.classList.add('hidden');
        });
    } else {
        shapes.forEach(element => {
            element.classList.remove('hidden');
        });
    }
});

let erfahrungen = document.querySelector('.erfahrungen');

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.target == erfahrungen && entry.isIntersecting) {
            entry.target.classList.add('animate');
            console.log(entry.target)
        }
    });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(erfahrungen);
