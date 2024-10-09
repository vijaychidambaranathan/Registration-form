document.getElementById("sign-up-btn").addEventListener("click", function() {
    document.querySelector(".container").classList.add("active");
});

document.getElementById("sign-in-btn").addEventListener("click", function() {
    document.querySelector(".container").classList.remove("active");
});

function signIn() {
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    if (email && password) {
        alert("Signed in successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}

function signUp() {
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    if (firstName && lastName && email && password) {
        alert("Signed up successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}
