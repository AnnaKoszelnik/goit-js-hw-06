const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    // Zapobiega odświeżeniu strony

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    // Sprawdza, czy pola są uzupełnione
    if (!emailInput.value || !passwordInput.value) {
      alert('Wypełnij wszystkie pola formularza!');
      return;
    }

    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log('Dane formularza:', formData);
    loginForm.reset();
  });