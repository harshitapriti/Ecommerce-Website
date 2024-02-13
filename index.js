//dynamic header and footer

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and inject header
    fetch('./header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data)
        .catch(error => console.error('Error fetching header:', error));

    // Fetch and inject footer
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data)
        .catch(error => console.error('Error fetching footer:', error));
});

/**For login validation */

function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("inputPassword5").value;
  
    if (email === "admin@admin.com" && password === "123456") {
        alert("Login successful");
      } else {
        alert("Incorrect email or password");
      }
  }




