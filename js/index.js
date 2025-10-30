// if we click on the footer button, it goes to the next page
const footerBtnPage1 = document.getElementById("footerBtnPage1");

footerBtnPage1.addEventListener("click", () => {

    /*
    we are in index.html page,
    in order to go to page2, we use this path 
    (the path is relative to index.html , not index.js)
    */

    window.location.href = "./pages/page2.html";
})