document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            if (localStorage.getItem(newUsername)) {
                document.getElementById("message").textContent = "Usuário já existe!";
            } else {
                localStorage.setItem(newUsername, newPassword);
                document.getElementById("message").textContent = "Cadastro realizado com sucesso!";
                setTimeout(() => window.location.href = "index.html", 2000);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const storedPassword = localStorage.getItem(username);

            if (storedPassword && storedPassword === password) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("message").textContent = "Usuário ou senha incorretos!";
            }
        });
    }
});
