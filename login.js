document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission

    const enteredEmail = document.getElementById("email-input").value.trim();
    const enteredPassword = document.getElementById("password-input").value.trim();

    // Get stored credentials
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedUsername = localStorage.getItem("username"); // Retrieve the username

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        // Login successful
        alert("Login successful!");

        // Update the username in localStorage for the current session
        localStorage.setItem("currentUsername", savedUsername);

        window.location.href = "home.html";
    } else {
        // Login failed
        alert("Invalid email or password.");
    }
});