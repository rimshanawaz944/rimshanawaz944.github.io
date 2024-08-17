document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Grab form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Simulate form submission (e.g., send data to a server or email service)
    // Here you would usually use AJAX or Fetch API to send data to the server
    // For this example, we'll just display a success message
    document.getElementById('formMessage').innerText = 'Your message has been sent!';

    // Optionally, clear form fields
    document.getElementById('contactForm').reset();
});
