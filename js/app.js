let nombre;

function start(){
    nombre = prompt('Ingrese su nombre').toUpperCase();;
    if(nombre != "" && nombre != null){
        alert(" ¡ BIENVENIDO  " + nombre + ' !');
        window.location.href = './views/productos.html';
    } else{
        alert("Debe ingresar un nombre"); 
    }
}