
// ==========================================
// 1. CONTROL DE BOTONES (AUTOCAD Y EXCEL)
// ==========================================
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

// ==========================================
// 2. CONTROL DE LA VENTANA EMERGENTE DE LA FOTO
// ==========================================
const fotoPerfil = document.querySelector('.foto');
const modalFoto = document.getElementById('modal-foto');
const botonCerrarModal = document.querySelector('.cerrar-modal');

// Si existe la foto en la página, activamos el clic para abrir
if (fotoPerfil && modalFoto && botonCerrarModal) {
    
    // Al hacer clic en tu foto, mostramos el modal interactivo
    fotoPerfil.addEventListener('click', () => {
        modalFoto.classList.add('mostrar');
    });

    // Al hacer clic en la "X", ocultamos el modal
    botonCerrarModal.addEventListener('click', () => {
        modalFoto.classList.remove('mostrar');
    });

    // Si el reclutador hace clic en el fondo oscuro exterior, también se cierra
    modalFoto.addEventListener('click', (e) => {
        if (e.target === modalFoto) {
            modalFoto.classList.remove('mostrar');
        }
    });
}
