document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Validation logic for Registration Form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById('country').value;
    let terms = document.getElementById('terms').checked;

    let isValid = true;

    // Reset error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('genderError').innerText = '';
    document.getElementById('countryError').innerText = '';
    document.getElementById('termsError').innerText = '';

    // Name Validation
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        isValid = false;
    }

    // Password Validation
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        isValid = false;
    }

    // Age Validation
    if (age < 18 || age > 100) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100';
        isValid = false;
    }

    // Gender Validation
    if (!gender) {
        document.getElementById('genderError').innerText = 'Please select your gender';
        isValid = false;
    }

    // Country Validation
    if (country === '') {
        document.getElementById('countryError').innerText = 'Please select your country';
        isValid = false;
    }

    // Terms and Conditions Validation
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Validation logic for Login Form
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;

    let isValid = true;

    // Reset error messages
    document.getElementById('loginEmailError').innerText = '';
    document.getElementById('loginPasswordError').innerText = '';

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!loginEmail.match(emailPattern)) {
        document.getElementById('loginEmailError').innerText = 'Invalid email format';
        isValid = false;
    }

    // Password Validation
    if (loginPassword.length < 8) {
        document.getElementById('loginPasswordError').innerText = 'Password must be at least 8 characters long';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});