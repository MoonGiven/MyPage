
document.querySelectorAll('.boton-habilidad').forEach(boton => {
    boton.addEventListener('click', () => {
        const contenedorHabilidad = boton.parentElement;
        const contenido = contenedorHabilidad.querySelector('.contenido-habilidad');
        const icono = boton.querySelector('span');

        // Alternar el estado activo en el contenedor
        contenedorHabilidad.classList.toggle('activo');

        // Controlar la animación de altura fluida
        if (contenedorHabilidad.classList.contains('activo')) {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
            icono.textContent = '−';
        } else {
            contenido.style.maxHeight = null;
            icono.textContent = '+';
        }
    });
});
