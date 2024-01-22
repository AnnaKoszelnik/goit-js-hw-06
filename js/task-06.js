const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', function () {
    const inputValue = inputElement.value.trim();
    const requiredLength = parseInt(inputElement.getAttribute('data-length'));

    if (inputValue.length === requiredLength) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  });