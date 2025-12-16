// Slide show
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    // Hide semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Next slide
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";

    // Panggil slide seterusnya selepas 3s
    setTimeout(showSlides, 3000);
}

// Mulakan slideshow
showSlides();

// Progress bar auto fill sampai habis
const progressBar = document.getElementById("progress-bar");
let width = 0;
const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval); // berhenti bila penuh
    } else {
        width++;
        progressBar.style.width = width + "%";
    }
}, 50); // 50ms per 1% → total ~5s

function toggleContent() {
    const content = document.getElementById("content");
    content.classList.toggle("hidden");
}
