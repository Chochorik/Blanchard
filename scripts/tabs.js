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

  $(document).ready(function(){
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
    });
  });

  document.querySelectorAll('.header__dropdown').forEach(dropdown => {
    new SimpleBar(dropdown, {
      scrollbarMax: 29,
    })
  })
});

tippy('#Button-1', {
  content: "Пример современных тенденций - современная методология разработки",
  placement: 'top',
  theme: 'purple',
  allowHTML: true,
});

tippy('#Button-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитические выводы вызывают у вас эмоции",
  placement: 'top',
  theme: 'purple',
  allowHTML: true,
});

tippy('#Button-3', {
  content: "В стремлении повысить качество",
  placement: 'top',
  theme: 'purple',
  allowHTML: true,
});

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();
