// Carusel functionality

// Form validation

document.getElementById('validate').addEventListener('click', function () {
  const fullname = this.form.fullname;
  const email = this.form.email;

  if (!fullname.value) {
    displayError(fullname, 'Du skal udfyde dette felt');
    return;
  }
  if (!email.value) {
    displayError(email, 'Du skal udfyde dette felt');
  }
});

const displayError = (element, message) => {
  const parent = element.parentElement;
  const grandparent = parent.parentElement;

  // Remove any existing error message
  if (grandparent.querySelector('.error-message')) {
    grandparent.querySelector('.error-message').remove();
  }

  // Add error class and message
  grandparent.classList.add('error');
  const errorMessage = document.createElement('span');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  parent.appendChild(errorMessage);
};

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('input', function () {
    const parent = this.parentElement;
    const grandparent = parent.parentElement;

    // Remove error message and class on input
    if (grandparent.querySelector('.error-message')) {
      grandparent.querySelector('.error-message').remove();
    }
    grandparent.classList.remove('error');
  });
});
