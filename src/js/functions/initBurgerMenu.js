// ---------------------------------------------------------------------------------------------------------------
// Функціонал для бургер меню. 
// ---------------------------------------------------------------------------------------------------------------

// beta version
export function initBurgerMenu() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    const body = document.body;

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = burger.classList.toggle('active');
        nav.classList.toggle('active', isActive);
        header.classList.toggle('header--open', isActive);
        body.classList.toggle('no-scroll', isActive);
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            if (nav.classList.contains('active')) {
                burger.classList.remove('active');
                nav.classList.remove('active');
                header.classList.remove('header--open');
                body.classList.remove('no-scroll');
            }
        }
    });

}