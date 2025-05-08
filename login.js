
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("email-input").value.trim();
        const password = document.getElementById("password-input").value.trim();

        if (username && password) {
            // Store username in localStorage (or sessionStorage)
            localStorage.setItem("username", username);

            // Redirect to the homepage
            window.location.href = "home.html";
        } else {
            alert('Please enter both email and password.');
        }
    });

