document.addEventListener('DOMContentLoaded', function() {
    const botonBarra = document.querySelector('.Barra_Boton');
    const barraLateral = document.querySelector('.barra_lateral');

    botonBarra.addEventListener('click', function() {
        // Cambiamos el valor de la propiedad left de la barra lateral para mostrar/ocultar la barra
        if (barraLateral.style.left === '0px' || barraLateral.style.left === '') {
            barraLateral.style.left = '-250px';
        } else {
            barraLateral.style.left = '0px';
        }
    });
});