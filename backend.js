// dark theme js

    const toggleBtn = document.getElementById('theme');
    
// Check for saved user preference, if any, on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

         // search bar js
document.getElementById("srch").addEventListener("focus", function() {
    document.getElementById("srchlist").style.display = "block";
        });

document.addEventListener("click", function(event) {
    if (!event.target.closest(".srchform")) {
        document.getElementById("srchlist").style.display = "none";
            }
        });

function search() {
            let input = document.getElementById("srch").value.toLowerCase();
            let items = document.getElementById("srchlist").getElementsByTagName("li");
    
    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
                }
            }
        }

function redirectToPage(page) {
    window.location.href = page;
}


 // Dynamically update the greeting message
 window.addEventListener("DOMContentLoaded", () => {
    const currentUsername = localStorage.getItem("currentUsername"); // Retrieve the logged-in username
    const greetingEl = document.getElementById("greeting");

    if (currentUsername) {
        greetingEl.textContent = `Hi, ${currentUsername}!`; // Update the greeting message
    } else {
        greetingEl.textContent = "Hi, User!"; // Default message if no user is logged in
    }
});