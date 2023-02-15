// Page Loader
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})




// Time on Home Page
const updateTimes = function () {

    const output = document.querySelector("output")
    const now = luxon.DateTime.now().setZone("America/Toronto")

    output.innerHTML = now.toFormat("HH:mm:ss")
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)




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

gsap.from(".header-top", {y: 20, opacity: 0, duration: 0.8});
gsap.from("h1", {y: 30, x: -30, opacity: 0, duration: 0.8, delay: 0.6});
gsap.from(".bio-wrap", {y: 30, x: 30, opacity: 0, duration: 0.8, delay: 0.9});
gsap.from(".portfolio", {y: 50, opacity: 0, duration: 0.8, delay: 1.2});