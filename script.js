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

// Send Gmail
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const senderName = form.name.value;
  const senderEmail = form.email.value;
  const bookTitle = form.bookTitle.value;
  const authorName = form.author.value;
  const phoneNumber = form.phone.value;
  const message = form.message.value;
  const shippingAddress = form.address.value;

  // Disable the submit button
  form.querySelector("button[type='submit']").disabled = true;

  const formData = new FormData();
  formData.append("name", senderName);
  formData.append("email", senderEmail);
  formData.append("author", authorName);
  formData.append("phone", phoneNumber);
  formData.append("message", message);
  formData.append("address", shippingAddress);
  formData.append("bookTitle", bookTitle)

  fetch("https://script.google.com/macros/s/AKfycbyhudbl2TWK04pLvuTdJ4Xlu96Nl07oElXEPLql0smOjqs-Eg88zTHjbCaEi2EajsyllQ/exec", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        alert("Your request has been submitted successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    })
    .catch(function (error) {
      alert("Oops! Something went wrong. Please try again later.");
    })
    .finally(function () {
      // Re-enable the submit button after 1 second
      setTimeout(function () {
        form.querySelector("button[type='submit']").disabled = false;
      }, 1000);
    });
});







