// Carusel functionality
let currentIndex = 0; // Initialize the current index

function plusSlides(value) {
  currentIndex += value;
  showSlides(currentIndex);
}

function showSlides(index) {
  const slides = document.querySelectorAll('.carouselSlide');
  if (index > slides.length / 3 - 1) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length / 3 - 1;
  }
  // 0,1,2 figure Imgs 0
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; // Hide all slides
  }
  for (let i = 0; i < 3; i++) {
    let showIndex = currentIndex * 3 + i;
    slides[showIndex].style.display = 'block';
  }
  console.log(currentIndex);
  // 3,4,5 figure Imgs 1
}
document.querySelector('.carousel-arrow--left').addEventListener('click', function () {
  plusSlides(-1);
});
document.querySelector('.carousel-arrow--right').addEventListener('click', function () {
  plusSlides(1);
});

// Form validation with success alert
document.getElementById('validate').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission
  // const form = this.closest('form'); // Get the form element
  const form = document.getElementById('infoForm');
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

// array.forEach((element) => {});
