// Carusel functionality


// Form validation with success alert
document.getElementById('validate').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission
  const form = this.closest('form');
  const fullname = form.fullName;
  const email = form.email;
  const message = form.message;

  let isValid = true;

  if (!fullname.value.trim()) {
    displayError(fullname, 'Du skal udfyde dit fulde navn');
    isValid = false;
  }
  if (!email.value.trim()) {
    displayError(email, 'Du skal udfyde din email');
    isValid = false;
  }
  if (!message.value.trim()) {
    displayError(message, 'Du udfylde en besked');
    isValid = false;
  }

  if (isValid) {
    alert('Formularen er korrekt udfyldt!');
    form.reset(); // Reset the form after successful validation
  }
});

const displayError = (element, message) => {
  const parent = element.parentElement;

  // Remove any existing error message
  const existingError = parent.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Add error class and message
  parent.classList.add('error');
  const errorMessage = document.createElement('span');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;

  errorMessage.style.color = 'red';
  parent.appendChild(errorMessage);
};

document.querySelectorAll('input, textarea').forEach((element) => {
  element.addEventListener('input', function () {
    const parent = this.parentElement;

    // Remove error message and class on input
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    parent.classList.remove('error');
  });
});
