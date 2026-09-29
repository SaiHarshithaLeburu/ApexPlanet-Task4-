// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Smooth scrolling for navigation links

const navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId =
            link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// CURRENT YEAR
// =========================

const footer =
    document.querySelector("footer");

if (footer) {

    const year =
        new Date().getFullYear();

    footer.setAttribute(
        "data-year",
        year
    );

}