// Scroll to top on page load
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

// Adjust scroll position after page load
window.addEventListener('load', function() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 0);
});

// banner
window.addEventListener('scroll', function() {
  var banner = document.querySelector('.sticky-banner');
  if (window.pageYOffset > 0) {
    banner.classList.add('visible');
  } else {
    banner.classList.remove('visible');
  }
});

// Smooth appearance on scroll
var scrollElements = document.querySelectorAll('.scroll-anim');

function checkScroll() {
  var windowHeight = window.innerHeight;
  
  scrollElements.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;
    
    if (elementTop - windowHeight <= 0) {
      element.classList.add('scroll-anim-active');
    }
  });
}

document.addEventListener('scroll', checkScroll);