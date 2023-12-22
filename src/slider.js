document.addEventListener('DOMContentLoaded', function() {
  let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      loop: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  swiper.init();
});
