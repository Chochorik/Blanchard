const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gallery-left__select").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".gallery-dropdown");

      document.querySelectorAll(".gallery-left__select").forEach(el => {
        if (el != btn) {
          el.classList.remove("active-btn_gallery");
        }
      });

      document.querySelectorAll(".gallery-dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-dropdown_gallery");
        }
      })
      dropdown.classList.toggle("active-dropdown_gallery");
      btn.classList.toggle("active-btn_gallery");
    })
  })

  window.addEventListener('DOMContentLoaded', function () {
    const validation = new JustValidate('#form');

    validation
      .addField('#name', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: 'Введите номер телефона',
        },
        {
          rule: 'minLength',
          value: 11,
          errorMessage: 'Неправильный номер телефона!'
        },
      ]);
  });

  const element = document.querySelector('#js-choice');
    const choices = new Choices(element, {
      itemSelectText: '',
      searchEnabled: false,
      placeholder: true,
    });
});

// burger-menu

// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', true);
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      btn.setAttribute('aria-expanded', false);
    }
  });
}

