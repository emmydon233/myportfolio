const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


// HAMBURGER BUTTON

hamburger.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        hamburger.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        hamburger.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


// CLOSE MENU WHEN A LINK IS CLICKED

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        hamburger.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you for your message!");

    contactForm.reset();

});
