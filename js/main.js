var wordchange=new Typed(".skills-typed",{
    strings:["Delphi","C#","SQL","HTML","CSS","JavaScrypt","Java","Python","Ruby on Rails"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1500
})
var wordchange=new Typed(".technical-skills-typed",{
    strings:["Visual Studio","Visual Studio Code","Microsoft Office","Graphical Design","SQL Management Server","IntelliJ IDEA","Scratch","Notepad++"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1500
})

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#nav-container');
        if (!navbarCollapsible) {
            return;
        }
        if (window.innerWidth >= 992 && window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    window.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#nav-container');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#nav-container',
            offset: 72,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
        document.querySelectorAll('#links-container .nav-link')
    );
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Shrink the navbar when the window is resized
    window.addEventListener('resize', navbarShrink);

});
