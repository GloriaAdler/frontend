// При клике на burger_icon класс nav_active у ul появляется, если его нет, и удаляется, если он есть

const burger_icon = document.querySelector('.burger_icon');
const nav_menu = document.querySelector('.nav_menu');

//!эта строчка делает кликабельным бургер и выдвигает меню на экран шириной менее 800px
burger_icon.addEventListener('click', () => nav_menu.classList.toggle('nav_active')); //toggle - всегда работает от противного, если нет - добавит, если есть - удерет. Возвращает булевое значение. 