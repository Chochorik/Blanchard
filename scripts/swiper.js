const swiper = new Swiper('.swiper-1', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
});

var GallerySwiper = new Swiper(".gallery__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-1",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

    1010: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
  }
});

var EventsSwiper = new Swiper(".events__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".events__swiper-pagination",
  },
  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    820: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
  }
});

var ProjectsSwiper = new Swiper(".project__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".project__swiper-button-next",
    prevEl: ".project__swiper-button-prev",
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
  }
});


