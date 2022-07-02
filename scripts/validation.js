// Валидация
const validation = new JustValidate('#form');
const telNumber = document.querySelector('#tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telNumber);

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое!',
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
      rule: 'function',
      errorMessage: 'Введите номер телефона',
      validator() {
        const phone = telNumber.inputmask.unmaskedvalue();
        return phone.length === 10;
      }
    },
  ]).onSuccess (function(e) {
    let thisForm = e.target;
    let formData = new FormData(thisForm);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  });
