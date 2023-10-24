// Get references to the sign-up form and error message elements
const signupForm = document.getElementById("signup-form");
const errorMessage = document.getElementById("error-message");

// Add a submit event listener to the sign-up form
signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the user's input for setting a username and password
    const setUsername = document.getElementById("set-username").value;
    const setPassword = document.getElementById("set-password").value;

    // Retrieve user credentials from local storage
    let userCredentials = JSON.parse(localStorage.getItem("userCredentials")) || [];

    // Check if the entered username already exists in the userCredentials array
    const existingUser = userCredentials.find((user) => user.username === setUsername);

    if (existingUser) {
        // Username already exists, display an error message
        errorMessage.textContent = "Username already exists. Please choose a different username.";
        errorMessage.style.color = "red";
    } else {
        // Username is unique, store the credentials
        userCredentials.push({ username: setUsername, password: setPassword });

        // Save the updated user credentials back to local storage
        localStorage.setItem("userCredentials", JSON.stringify(userCredentials));

        // Clear the input fields
        document.getElementById("set-username").value = "";
        document.getElementById("set-password").value = "";

        // Provide a success message (you can customize this message)
        errorMessage.textContent = "Account created successfully!";
        errorMessage.style.color = "green";
    }
});
