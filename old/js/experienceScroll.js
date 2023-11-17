const section = document.querySelector('#experience');
const wrapper = document.querySelector('.positions-wrapper');
const heading = document.querySelector('.positions h2');
const pos = document.querySelector('.positions');
const pos1 = document.querySelector('#pos1');
const pos2 = document.querySelector('#pos2');
const pos3 = document.querySelector('#pos3');

document.addEventListener('scroll', (event) => {
    pos.dataset.scroll = Math.max(0, -(section.getBoundingClientRect().y + pos.getBoundingClientRect().height - 250) * 0.003);
    updateHeading();
    updatePos1();
    updatePos2();
    updatePos3();
});

function updateHeading() {
    if(parseFloat(pos.dataset.scroll) >= 1) {
        heading.style.opacity = `${1 - Math.min(Math.max(0, -1 + parseFloat(pos.dataset.scroll)), 1)}`;
    }
}

function updatePos1() {
    let z = pos.dataset.scroll;
    let x = Math.max(0,Math.pow(parseFloat(pos.dataset.scroll) * 4, 2));
    pos1.style.transform = `translateZ(${z}px) translateX(calc(-50% - ${x}px))`;
}

function updatePos2() {
    let startFade = 3.5;
    let start = 4;
    pos2.style.opacity = `${Math.min(Math.max(0, -startFade + parseFloat(pos.dataset.scroll)), 1)}`;
    if(parseFloat(pos.dataset.scroll) >= start) {
        let z = pos.dataset.scroll - start;
        let x = Math.min(0, -Math.pow((parseFloat(pos.dataset.scroll) - start) * 5.5, 2));
        pos2.style.transform = `translateZ(${z}px) translateX(calc(-50% - ${x}px))`;
    }
}

function updatePos3() {
    let startFade = 6.5;
    let start = 7.5;
    pos3.style.opacity = `${Math.min(Math.max(0, -startFade + parseFloat(pos.dataset.scroll)), 1)}`;
    if(parseFloat(pos.dataset.scroll) >= start) {
        let z = pos.dataset.scroll - start;
        let x = Math.max(0, Math.pow((parseFloat(pos.dataset.scroll) - start) * 4.5, 2));
        pos3.style.transform = `translateZ(${z}px) translateX(calc(-50% - ${x}px)`;
    }
}