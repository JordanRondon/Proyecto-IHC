function validarLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@hotmail.com" && password === "admin123") {
        window.location.href = "ventaproductos.html";
    } else {
        alert("datos Incorrectos")
    }
}