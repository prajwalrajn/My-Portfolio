document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple alert (you can replace this with actual form handling code)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});
