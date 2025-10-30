// Slider
let idx = 1;
const imgsNo = 8;

const sliderToLeft = document.getElementById("sliderToLeft");
const sliderToRight = document.getElementById("sliderToRight");
const photo = document.getElementById("photo");

sliderToLeft.addEventListener("click", () => {
    idx = idx === 1 ? imgsNo : idx - 1;
    updatePhoto();
})

sliderToRight.addEventListener("click", () => {
    idx = idx === imgsNo ? 1 : idx + 1;
    updatePhoto();
})

function updatePhoto() {
    photo.src = `../assets/images/gallery${idx}.jpg`;
}