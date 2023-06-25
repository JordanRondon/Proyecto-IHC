function abrirMenu() {
    let BarraMenuAbierto = document.getElementById('barra-menu');

    if (BarraMenuAbierto.style.width == "0px") {
        BarraMenuAbierto.style.width = "300px";
    } else {
        BarraMenuAbierto.style.width = "0px";
    }
}