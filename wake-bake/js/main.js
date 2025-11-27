(function () {

    document.addEventListener('click', burgerItit)
    function burgerItit(e) {
        const burgerIcon = e.target.closest('.burger_icon')
        const burgerNavLink = e.target.closest('.nav__link')




        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body__opened_menu')) {
            document.body.classList.add('body__opened_menu')
        } else {
            document.body.classList.remove('body__opened_menu')
        }

    }
})()


document.addEventListener('DOMContentLoaded', function () {
    const aboutImgButton = document.querySelector('.about__img-button');
    const modalCancel = document.querySelector('.modal__cancel');
    const body = document.body;

    if (aboutImgButton) {
        aboutImgButton.addEventListener('click', function () {
            body.classList.add('body__opened-modal');
        });
    }

    if (modalCancel) {
        modalCancel.addEventListener('click', function () {
            body.classList.remove('body__opened-modal');
        });
    }
});