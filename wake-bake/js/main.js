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