document.addEventListener('DOMContentLoaded', function() {

    // Contact Form validation
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var email = document.getElementById('validationCustomUsername').value;
      var message = document.getElementById('message').value;

      if (name === '' || email === '' || message === '') {
        // Alert user for an invalid form submission
        alert('Please fill out all fields');
      } else {
        // Reset form and alert user for a valid form submission
        contactForm.reset();
        alert('Thank you for submitting');
      }
    });
  });
