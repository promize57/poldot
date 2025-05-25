<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial call
showSlide(currentSlide);

// Auto slide change every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);
</script>