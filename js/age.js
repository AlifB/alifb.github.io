const ageSpan = document.getElementById('age');

const age = new Date(new Date() - new Date(2000, 3, 2));

ageSpan.innerHTML = Math.abs(age.getFullYear() - 1970);