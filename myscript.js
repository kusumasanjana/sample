function validateForm() {
    var firstName = sanitizeInput(document.getElementById('firstName').value);
    var lastName = sanitizeInput(document.getElementById('lastName').value);
    var email = sanitizeInput(document.getElementById('email').value);
    var password = document.getElementById('password').value.trim(); // Do not sanitize passwords
    var confirmPassword = document.getElementById('confirmPassword').value.trim(); // Do not sanitize passwords
    console.log(password, confirmPassword);

    var errorMessage = "";

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage += "All fields must be filled out.<br>";
    }

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage += "Invalid email format.<br>";
    }

    if (password.toLowerCase()!== confirmPassword.tolowerCase()) {
        errorMessage += "Passwords do not match.<br>";
    }

    var errorContainer = document.getElementById('error-message');
    errorContainer.innerHTML = errorMessage;

    if (errorMessage === "") {
        // Form is valid, you can submit the form or perform other actions here
        alert("Form submitted successfully!");
    }
}

function sanitizeInput(input) {
    // Basic HTML escaping to prevent XSS
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
