let header = document.querySelector('[data-header]');
let burger = document.querySelector('[data-toggle-menu]');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--scrolling', window.pageYOffset > 50);
    });

    burger.addEventListener('click', () => {
        document.documentElement.classList.toggle('overflow-hidden');
        header.classList.toggle('header--menu-open');
        burgerToggle(burger);
    });
}

function burgerToggle(burger) {
    burger.children[0].classList.toggle('burger__cross--first')
    burger.children[1].classList.toggle('burger__cross--second')
    burger.children[2].classList.toggle('burger__cross--third')
    burger.children[3].classList.toggle('burger__cross--fourth')
}
