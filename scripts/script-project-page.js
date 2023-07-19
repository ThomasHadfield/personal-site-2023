// Page Loader
var loader = document.getElementById("pre-load");
window.addEventListener("load", function() {
    loader.style.display = "none";
})




// Mouse Move
let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
});


  
// GSAP

gsap.from(".project-name-wrap", {y: 30, opacity: 0, duration: 0.8});
gsap.from(".project-details-wrap", {y: 30, opacity: 0, duration: 0.8, delay: 0.4});
gsap.from(".case-study", {y: 30, opacity: 0, duration: 0.8, delay: 0.8});