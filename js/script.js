const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')
const header = document.querySelector('.header')

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    header.classList.toggle('header--active')
})