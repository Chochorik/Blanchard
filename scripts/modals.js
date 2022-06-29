(() => {
  const openBtns = document.querySelectorAll('.js-open-modal-btn');
  const overlay = document.querySelector('.js-overlay');
  const closeBtns = document.querySelectorAll('.js-modal-close');
  const fixedElems = document.querySelectorAll('.js-modal-fixed') // Класс js-modal-fixed добавляем на все элементы с фиксированым позиционированием

  function closeModal (e) {
      e.stopPropagation();

      const isCloseClick = e.target.classList.contains('js-modal-close') || e.target.classList.contains('js-overlay');
      const isOverlayClick = e.target.classList.contains('js-overlay');

      if (isCloseClick || isOverlayClick) {
          const modal = document.querySelector('.js-modal.open');
          console.log(e.target)

          fixedElems.forEach(el => {
              el.style.paddingRight = '';
          });


          modal.classList.remove('open');
          overlay.classList.remove('open');

          document.body.style.paddingRight = '';
          document.body.classList.remove('scroll-lock');
      }
  }

  function openModal (e) {
      const path = e.target.dataset.modal;
      const modal = document.querySelector(`.js-modal[data-modal=${path}]`);
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

      fixedElems.forEach(el => {
          el.style.paddingRight = paddingOffset;
      });

      document.body.style.paddingRight = paddingOffset;
      document.body.classList.add('scroll-lock');

      overlay.classList.add('open');
      modal.classList.add('open');
  }

  openBtns.forEach(btn => {
      btn.addEventListener('click', openModal);
  });

  closeBtns.forEach(btn => {
      btn.addEventListener('click', closeModal);
  });

  overlay.addEventListener('click', closeModal);
})();
