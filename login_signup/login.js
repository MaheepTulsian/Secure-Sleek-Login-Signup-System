// Get references to the login form, error message, and signup button elements
const loginForm = document.getElementById("login-form");
const loginErrorMessage = document.getElementById("login-error-message");
const signupButton = document.getElementById("signup-button");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the user's input for login
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    // Retrieve user credentials from local storage
    const storedCredentials = JSON.parse(localStorage.getItem("userCredentials")) || [];

    // Find the index of the provided username in the stored credentials
    const userIndex = storedCredentials.findIndex((user) => user.username === loginUsername);

    if (userIndex !== -1) {
        // User found based on the username
        const storedPassword = storedCredentials[userIndex].password;

        // Check if the entered password matches the stored password
        if (loginPassword === storedPassword) {
            // Successful login
            loginErrorMessage.textContent = "Login successful!";
            loginErrorMessage.style.color = "green";

            // Redirect to another webpage (change the URL as needed)
            window.location.href = "dashboard.html"; // Replace with your desired URL
        } else {
            // Incorrect password
            loginErrorMessage.textContent = "Invalid password. Please try again.";
            loginErrorMessage.style.color = "red";
            
        }
    } else {
        // User not found based on the entered username
        loginErrorMessage.textContent = "User not found. Please sign up first.";
        loginErrorMessage.style.color = "red";
        
        // Show the "Sign Up" button
        signupButton.style.display = "inline"; // Display the button
    }
});

// Add a click event listener to the signup button
signupButton.addEventListener("click", function () {
    // Handle the signup action, such as redirecting to a signup page
    window.location.href = "signup.html"; // Replace with your desired signup page URL
});
