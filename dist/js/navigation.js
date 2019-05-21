const navBtn = document.querySelector('.nav__menu');
const menu = document.querySelector('.menu');

navBtn.addEventListener('click', () => {
    menu.classList.toggle('d-block');
    menu.classList.add('fade');
});