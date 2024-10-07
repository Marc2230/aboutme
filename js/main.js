// ============================================================//
// ===================HOME PAGE ANIMATION======================//
// ============================================================//

document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500
  });

  ScrollReveal().reveal('.main-title', { delay: 300, easing: 'ease' });
  ScrollReveal().reveal('.sec-01 .image', { delay: 400, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.sec-01 .text-box', { delay: 500, origin: 'left', easing: 'ease' });
  ScrollReveal().reveal('.media-icons i', { delay: 100, origin: 'bottom', interval: 100, easing: 'ease' });
  ScrollReveal().reveal('.section-title', { delay: 100, origin: 'bottom' });

  ScrollReveal().reveal('.sec-02 .image', { delay: 100, origin: 'left', easing: 'ease' });
  ScrollReveal().reveal('.sec-03 .image', { delay: 100, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.sec-04 .image', { delay: 100, origin: 'left', easing: 'ease' });
  ScrollReveal().reveal('.sec-05 .image', { delay: 100, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.sec-06 .image', { delay: 100, origin: 'left', easing: 'ease' });

  ScrollReveal().reveal('.sec-02 .info', { delay: 100, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.sec-03 .info', { delay: 100, origin: 'left', easing: 'ease' });
  ScrollReveal().reveal('.sec-04 .info', { delay: 100, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.sec-05 .info', { delay: 100, origin: 'left', easing: 'ease' });
  ScrollReveal().reveal('.sec-06 .info', { delay: 100, origin: 'right', easing: 'ease' });
  ScrollReveal().reveal('.nav-title', { delay: 100, origin: 'top', easing: 'ease' });

  // ============================================================//
  // ===================ABOUT PAGE ANIMATION==================//
  // ============================================================//

    ScrollReveal().reveal('.about-title', { duration: 1000, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.about-subtitle .span-1', { duration: 1000, origin: 'left', distance: '50px', delay: 500 });
    ScrollReveal().reveal('.about-subtitle .span-2', { duration: 1000, origin: 'bottom', distance: '50px', delay: 1200 });
    ScrollReveal().reveal('.about-section', { duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.about-image img', { duration: 1000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.about-media-icons .icon', { duration: 1000, origin: 'right', distance: '50px', interval: 100 });
  
});
