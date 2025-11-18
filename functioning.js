const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, n) => {
    slide.classList.toggle('active', n === i);
    dots[n].classList.toggle('active', n === i);
  });
}

// ⏰ Auto change every 3 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

// 🔘 Dot click functionality
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});


var testi = new Swiper(".testimonial-right", {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
