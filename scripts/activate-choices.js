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
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);
    new JustValidate('.contacts__form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 20
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.Inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
        mail: {
          required: true,
          email: true
        },
      },
    });
  });

  const element = document.querySelector('#js-choice');
    const choices = new Choices(element, {
      itemSelectText: '',
      searchEnabled: false,
      placeholder: true,
    });
});

$(function () {
  $("#accordion").accordion();
});
