window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function () {
      document.querySelector('.catalog__default').classList.add('catalog__disabled');
      document.querySelector('.catalog__tab').classList.add('catalog__tab-active')
    });
    document.querySelector('.nonTab').addEventListener('click', function() {
      document.querySelector('.catalog__default').classList.remove('catalog__disabled');
      document.querySelector('.catalog__tab').classList.remove('catalog__tab-active')
    });
  });

  document.querySelectorAll('.header__dropdown').forEach(dropdown => {
    new SimpleBar(dropdown, {
      scrollbarMax: 29,
    })
  })
});

// toolype

tippy('.project__tooltype', {
  content: "Пример современных тенденций - современная методология разработки",
  placement: 'top',
  theme: 'purple',
  allowHTML: true,
});

// accordion

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// burger
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.header__list').classList.add('header__list_active');
    document.body.classList.toggle('scroll-lock');
  });

  document.querySelectorAll('.header__item').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.header__nav_active').classList.remove('header__nav_active');
      document.querySelector('.burger-active').classList.remove('burger-active');
      document.body.classList.remove('scroll-lock');
    });
  });

  // search


  if (document.documentElement.clientWidth < 890) {
    document.querySelector('.header__search-btn').addEventListener('click', function() {
      document.querySelector('.header__logo').classList.add('nonActive__header');
      document.querySelector('.burger').classList.add('nonActive__header');
      document.querySelector('.header__search-tablet').classList.add('header__search-tablet_active');
      document.querySelector('.header__search-btn').classList.add('header__search-btn_disabled');
      document.querySelector('.header__close-btn').addEventListener('click', function() {
        document.querySelector('.header__search-tablet').classList.remove('header__search-tablet_active');
        document.querySelector('.header__search-btn').classList.remove('header__search-btn_disabled');
        document.querySelector('.header__logo').classList.remove('nonActive__header');
        document.querySelector('.burger').classList.remove('nonActive__header');
      });
    });
  } else {
    document.querySelector('.header__search-btn').addEventListener('click', function() {
      document.querySelector('.header__search-tablet').classList.add('header__search-tablet_active');
      document.querySelector('.header__search-btn').classList.add('header__search-btn_disabled');
      document.querySelector('.header__close-btn').addEventListener('click', function() {
        document.querySelector('.header__search-tablet').classList.remove('header__search-tablet_active');
        document.querySelector('.header__search-btn').classList.remove('header__search-btn_disabled');
      });
    });
  };

  let btn = document.querySelector('.header__search-btn-mobile');
  let search = document.querySelector('.header__search-mobile');

  btn.addEventListener('click', function() {
    search.classList.add('header__search-mobile_active');
  });

  document.querySelector('.js-btn-close').addEventListener('click', function() {
    search.classList.remove('header__search-mobile_active');
  })
});
