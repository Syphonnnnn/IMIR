// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animations
  window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');

    function animateSection() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('animated');
        }
      });
    }

    animateSection();

    window.addEventListener('scroll', animateSection);
  });

  // Navigation Menu Animation
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.pageYOffset > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// Product Modal
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementsByClassName('close')[0];

const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
  item.addEventListener('click', function() {
    const image = this.querySelector('img').src;
    const name = this.querySelector('h3').textContent;
    const price = this.querySelector('p').textContent;
    const description = 'This is a sample product description.'; // Replace with actual description

    modalImage.src = image;
    modalName.textContent = name;
    modalPrice.textContent = price;
    modalDescription.textContent = description;

    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
