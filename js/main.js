
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// event listener para la flecha derecha
// toma con scrollLeft el valor del scroll del carousel, y le sume el offsetwidth
flechaDerecha.addEventListener('click', () =>{
     fila.scrollLeft += fila.offsetWidth;

     const indicadorActivo = document.querySelector('.indicadores .activo');
     if (indicadorActivo.nextElementSibling) {
        indicadorActivo.nextElementSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
     }
})

flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
       indicadorActivo.previousSibling.classList.add('activo');
       indicadorActivo.classList.remove('activo');
    }
})

// paginacion
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click' ,(e)=>{
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

//hover de la imagen
peliculas.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter', (e)=>{
        const elemento = e.currentTarget;
        setTimeout(()=>{
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    })
})

fila.addEventListener('mouseleave', () =>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})