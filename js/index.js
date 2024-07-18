
const slider = document.getElementById('slider');
const slidersIMGCount = document.querySelectorAll('.slide').length;
let index = 0;
let interval;

function desplazamientoDerecha() {
    index = (index + 1 +slidersIMGCount) % slidersIMGCount;
    slider.style.transform = `translateX(-${index * 100}%)`;
}


function correrDiapositivas() {
    interval = setInterval(() => {
     setTimeout(desplazamientoDerecha,4000)
        
    }, 4000); // Repite cada 30 segundos para dar tiempo a cada desplazamiento
}

function stopInterval() {
    clearInterval(interval);
}

slider.addEventListener('mouseenter', stopInterval);
slider.addEventListener('mouseleave', correrDiapositivas);

correrDiapositivas();


/*============================================================================================*/ 


let listas = document.querySelectorAll('.servicio-li');

function inserccion(entries, observador) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('activacion');
            observador.unobserve(entry.target);
        }
    });
}

const observador = new IntersectionObserver(inserccion, {
    root: null, // o puedes especificar un contenedor
    threshold: 1 // Ajusta el umbral según tus necesidades
});

listas.forEach(elemento => {
    observador.observe(elemento);
});



/*================================================================*/ 


const flechaIzquierda = document.getElementById('flecha-Izquierda');
const flechaDerecha = document.getElementById('flecha-Derecha');
const contenedorImg = document.getElementById('contenedor-img');
const imagenes = document.querySelectorAll('.img_clientes');

let currentIndex = 0;
const imagesToShow = 5; // Número de imágenes visibles a la vez
const totalImages = imagenes.length;
const maxIndex = Math.ceil(totalImages / imagesToShow) - 1; // Calcula el número máximo de pasos

flechaIzquierda.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + maxIndex + 1) % (maxIndex + 1);
    contenedorImg.style.transform = `translateX(-${currentIndex * 100 / (maxIndex + 1)}%)`;
});

flechaDerecha.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    contenedorImg.style.transform = `translateX(-${currentIndex * 100 / (maxIndex + 1)}%)`; 
}); 



/*====================================================================================================*/ 



const videos = document.querySelectorAll('.video-background');
let indice = 0;

window.addEventListener('DOMContentLoaded', () => {
    // Mostrar el primer video inmediatamente
   

    function deslizarVideos() {
        // Eliminar la clase 'active' del video actual
        videos[indice].classList.remove('active');
        // Actualizar el índice al siguiente video
        indice = (indice + 1) % videos.length;
        // Añadir la clase 'active' al siguiente video
        videos[indice].classList.add('active');
    }

    // Cambiar de video cada 9 segundos
    setInterval(deslizarVideos, 9000);
}); 



/*=========================================================================*/ 



const nav=document.querySelector('.nav') 

const menu=document.getElementById('icon-bar') 

const servicios=document.querySelector('.menu-Servicios')

 let validar=true



 nav.addEventListener('click',()=>{
    menu.classList.remove('modificado')
    servicios.classList.remove('modificado')
    nav.classList.remove('activo') 
   
          
        
  
})



menu.addEventListener('click',(e)=>{ 
   

       if(!validar){  
        menu.classList.remove('modificado')
        servicios.classList.remove('modificado')
        nav.classList.remove('activo') 
        
          
    
       }  

    

      
        else{ 
            menu.classList.add('modificado')
            servicios.classList.add('modificado')
            nav.classList.add('activo')
            menu.style.position='fixex'
            menu.style.top='0px'
            menu.style.left='0px'
          
           
           
           

        }  

        validar=!validar

})  


  
