var carritoVisible = false;
var botonclickeado = false;
let descripcionesproductos = document.querySelector('.productos-descripcion');
let descripcion = descripcionesproductos.querySelectorAll('.descripcion');
document.querySelectorAll('.contenedor-items .item').forEach(item =>{
    
    item.onclick = () =>{
        
        let name = item.getAttribute('data-name');
        descripcion.forEach(descripcion =>{
            let target = descripcion.getAttribute('data-target');
            if(name== target && botonclickeado==false){
                descripcionesproductos.style.display ='flex';
                descripcion.classList.add('activo');
                
            }
            else if (name== target && botonclickeado==true){
                botonclickeado = false;
            }
            
        });
    };
});
descripcion.forEach(close =>{
    close.querySelector('.fa-times').onclick=() =>{
        
        close.classList.remove('activo');
        descripcionesproductos.style.display ='none';
    };
});





