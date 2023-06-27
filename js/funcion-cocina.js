// Obtener todos los elementos con la clase "pedido"
var pedidos = document.querySelectorAll('.pedido');
// Tiempo en milisegundos para considerar como "click largo"
var tiempoClickLargo = 300; // 1 segundo (puedes ajustar este valor según tus necesidades)
// Tiempo en milisegundos de espera antes de ocultar el pedido
var tiempoEspera = 600; // 2 segundos (puedes ajustar este valor según tus necesidades)
var tiempoEspera2 = 800;

// Variable para almacenar el temporizador


// Agregar el evento "mousedown" a cada elemento con la clase "pedido"
pedidos.forEach(function(pedido) {
    var temporizador;

    pedido.addEventListener('mousedown', function() {
        temporizador = setTimeout(function() {
            pedido.classList.add('contraido');
        // Obtener el checkbox dentro del pedido actual

        var checkbox = pedido.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            pedido.classList.toggle('seleccionado');
            setTimeout(function(){
                checkbox.checked = true;
            },350);
            setTimeout(function() {
                pedido.classList.add('salida-derecha'); // Agregar clase "oculto" al pedido después del tiempo de espera
                
                var pedidoSiguiente = pedido.nextElementSibling;
                
                if (pedidoSiguiente) {
                    pedidoSiguiente.classList.add('subir');
                    setTimeout(function() {
                        pedidoSiguiente.classList.remove('subir');
                        pedidoSiguiente.classList.add('bajar');
                        pedidoSiguiente.addEventListener('transitionend', function() {
                          pedidoSiguiente.classList.remove('bajar');
                        });
                    }, 500);
                    }
            }, tiempoEspera);
            setTimeout(function() {
                pedido.classList.add('oculto'); // Agregar clase "oculto" al pedido después del tiempo de espera
                pedido.classList.remove('contraido');
                pedidoSiguiente.classList.remove('contraido');
            }, tiempoEspera2);
          }
          
        }, tiempoClickLargo);
    });

    pedido.addEventListener('mouseup', function() {
        clearTimeout(temporizador);
    });

    pedido.addEventListener('mouseleave', function() {
        clearTimeout(temporizador);
    });
    
});
