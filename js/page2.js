// selection navigation
const selectors = document.querySelectorAll(".selector");

selectors.forEach((selector) => {
    selector.addEventListener("click", (e) => {
        /*
        we are in page2.html page,
        in order to go to page5, we use this path 
        (the path is relative to page2.html , not page2.js)
        */
        window.location.href = "./page5.html";
    })
})

// handle click on gallery images 
const cards = document.querySelectorAll(".gallery .card");
cards.forEach((card) => {
    card.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-floating") || e.target.classList.contains("check")) {
            card.classList.toggle("active-card");
        } else if (e.target.classList.contains("image")) {
            /*
            we are in page2.html page,
            in order to go to page4, we use this path 
            (the path is relative to page2.html , not page2.js)
            */
            window.location.href = "./page4.html";
        }
    })
})

// if we click on the footer button, it shows a loader simulation then goes to the next page
const footerBtnPage2 = document.getElementById("footerBtnPage2");
const loader = document.querySelector(".loader");

footerBtnPage2.addEventListener("click", () => {
    footerBtnPage2.style.cssText = "display: none !important;";
    loader.style.cssText = "display: flex !important;";
    setTimeout(() => {
        /*
        we are in page2.html page,
        in order to go to page3, we use this path 
        (the path is relative to page2.html , not page2.js)
        */
        window.location.href = "./page3.html";
    }, 1000)
})