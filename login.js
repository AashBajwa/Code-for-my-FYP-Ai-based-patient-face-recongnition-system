document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Correct Gmail and Password
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check login details
    if (email === correctEmail && password === correctPassword) {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerHTML =
            "Incorrect Gmail or Password!";

    }

});