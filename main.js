const toggleButton = document.querySelector('.navbar__toggle-button');
const navbarList = document.querySelector('.navbar__list');
const toggleIcon = document.querySelector('.navbar__toggle-button i');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('active');
  toggleIcon.classList.toggle('fa-bars');
  toggleIcon.classList.toggle('fa-xmark');
});

// back to
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  const position = window.scrollY;
  const duration = 1000;
  const start = Date.now();

  function animateScroll() {
    const elapsed = Date.now() - start;
    const progress = elapsed / duration;
    const ease = easeOutQuart(progress);
    window.scrollTo(0, position * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
});

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}