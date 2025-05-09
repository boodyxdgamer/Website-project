    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("firstname-input").value.trim();
        if (username) {
            localStorage.setItem("username", username); // Save username to localStorage
            window.location.href = "home.html"; // Redirect to home page
        }
    });
