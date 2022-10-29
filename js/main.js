const header = document.querySelector('header');
const surname = document.querySelector('.surname');
const copyrightYear = document.querySelector('#copyright-year');
const myAge = document.querySelector('#my-age');
const myBirthday = new Date('2000-03-02');
const currentDate = new Date();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('contact-info')) {
                entry.target.classList.add('show-contact');
            }
            if(entry.target.classList.contains('intro-snippet')) {
                entry.target.classList.add('show-snippet');
            }
        } else {
            entry.target.classList.remove('show-snippet');
        }
    });
});

const introSnippets = document.querySelectorAll('.intro-snippet');
const contactInfo = document.querySelectorAll('.contact-info');
introSnippets.forEach(snippet => observer.observe(snippet));
contactInfo.forEach(contact => observer.observe(contact));

let age = currentDate.getFullYear() - myBirthday.getFullYear();
if(myBirthday.getMonth() > currentDate.getMonth() || (myBirthday.getMonth() == currentDate.getMonth() && myBirthday.getDate() > currentDate.getDate())) {
    age--;
}
myAge.innerHTML = age;

copyrightYear.innerHTML = currentDate.getFullYear();

document.addEventListener('scroll', () => {
    if(!document.body.classList.contains('fixed-header') && (header.getBoundingClientRect().y <= 10)) {
        document.body.classList.add('fixed-header');
        document.body.classList.remove('unfix-header');
    } else {
        if(document.body.classList.contains('fixed-header') && (header.getBoundingClientRect().y >= 10)) {
            document.body.classList.remove('fixed-header');
            document.body.classList.add('unfix-header');
        }
    }
});