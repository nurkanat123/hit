// JavaScript to toggle the menu visibility
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});