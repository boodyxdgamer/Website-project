document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("firstname-input").value.trim();
    const password = document.getElementById("password-input").value;
    const repeatPassword = document.getElementById("repeat-password-input").value;

    if (!username) {
        alert("Please enter a username.");
        return;
    }

    if (!password) {
        alert("Please enter a password.");
        return;
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save username to localStorage
    localStorage.setItem("username", username);

    // Redirect to home page
    window.location.href = "home.html";
});
