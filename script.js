document.addEventListener('DOMContentLoaded',function(){
    const botonBarra=document.querySelector('.Barra_Boton');
    const botonLateral=document.querySelector('.Barra_lateral');
    botonBarra.addEventListener('click',function(){
        if(barraLateral.style.left==='0px'|| botonLateral.style.left===''){
            barraLateral.style.left='-250px';
        }else{
            barralateral.style.left='0px';
        }

    });


});