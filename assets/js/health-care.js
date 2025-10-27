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



const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        showSlide(i);
      });
    });

    setInterval(nextSlide, 5000); 