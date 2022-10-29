const header = document.querySelector('header');
const surname = document.querySelector('.surname');
const myAge = document.querySelector('#my-age');
const myBirthday = new Date('2000-03-02');
const currentDate = new Date();

let age = currentDate.getFullYear() - myBirthday.getFullYear();
if(myBirthday.getMonth() > currentDate.getMonth() || (myBirthday.getMonth() == currentDate.getMonth() && myBirthday.getDate() > currentDate.getDate())) {
    age--;
}
myAge.innerHTML = age;


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