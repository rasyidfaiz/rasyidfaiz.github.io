// AOS
AOS.init({
  once: true,
});

// GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {
  text: 'Web Developer',
  duration: 2,
  delay: 1.5,
});
gsap.from('.jumbotron img', {
  opacity: 0,
  duration: 1,
  rotateY: 360,
});
gsap.from('.navbar', {
  opacity: 0,
  duration: 1,
  y: '-100%',
  ease: 'bounce',
});
gsap.from('.display-6', {
  opacity: 0,
  duration: 1,
  x: -50,
  delay: 0.5,
  ease: 'back',
});

// Tilt.js
VanillaTilt.init(document.querySelectorAll('.keyboard-box'), {
  max: 35,
  speed: 1000,
  glare: true,
});

// Script untuk membuat navbar item aktif saat di klik
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((e) => {
  e.addEventListener('click', function () {
    navLink.forEach((e) => {
      e.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Script untuk mengirim data form ke Google Sheets
const scriptURL =
  'https://script.google.com/macros/s/AKfycbytONf4CAWKFZh6r0QmuO1HqEenhyrT_-458ZTcczUqMgM1fKxw5k0oIwETrT6udaw/exec';
const form = document.forms['contact-form'];
const btnLoading = document.querySelector('.loading');
const btnSubmit = document.querySelector('.submit');
const alertSuccess = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      alertSuccess.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
