// document.addEventListener("DOMContentLoaded", function () {
//     var typed = new Typed("#typed-text", {
//         strings: ["Joshua Utik", "A Web Developer", "An Instructor", 'A Freelancer!'],
//         typeSpeed: 80,
//         backSpeed: 80,
//         loop: true
//     });

//      if (window.innerWidth < 992) {
//         const mobileElement = document.getElementById("typed-text-mobile");
//         if (mobileElement) {
//             new Typed("#typed-text-mobile", options);
//         }
//     } else {
//         const desktopElement = document.getElementById("typed-text-desktop");
//         if (desktopElement) {
//             new Typed("#typed-text-desktop", options);
//         }
//     }
// });

    document.addEventListener("DOMContentLoaded", function () {
        const options = {
            strings: ["Joshua Utik", "A Web Developer", "An Instructor", "A Freelancer!"],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        };

        // Detect screen size and target correct ID
        if (window.innerWidth < 992) {
            const mobileElement = document.getElementById("typed-text-mobile");
            if (mobileElement) {
                new Typed("#typed-text-mobile", options);
            }
        } else {
            const desktopElement = document.getElementById("typed-text-desktop");
            if (desktopElement) {
                new Typed("#typed-text-desktop", options);
            }
        }
    });