document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    });


    window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const bannerHeight = document.querySelector('.banner').offsetHeight;

  if (window.scrollY > bannerHeight - 100) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});



const slides = document.querySelectorAll(".slide-2");
const dots = document.querySelectorAll(".dot");
let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev", "next");
    dots[i].classList.remove("active");
  });

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
  dots[current].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlides();
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    updateSlides();
  });
});

updateSlides();
setInterval(nextSlide, 3000);




const slides1 = document.querySelectorAll('.testimonial-slide');
    const dots1 = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      slides1.forEach(slide => slide.classList.remove('active'));
      dots1.forEach(dot => dot.classList.remove('active'));
      slides1[i].classList.add('active');
      dots1[i].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % slides1.length;
      showSlide(index);
    }

    dots1.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        showSlide(i);
      });
    });

    setInterval(nextSlide, 5000);   