// ==========================================================================
// 1. CONTROL DE LA VENTANA EMERGENTE DE LA FOTO DE PERFIL
// ==========================================================================
const fotoPerfil = document.querySelector('.foto');
const modalFoto = document.getElementById('modal-foto');
const botonCerrarModal = document.querySelector('.cerrar-modal');

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

// ==========================================================================
// 2. CONTROL DEL CUADRO EMERGENTE BLANCO PARA EL PROYECTO DE AUTOCAD
// ==========================================================================
const tarjetaAutoCAD = document.getElementById('tarjeta-autocad');
const modalAutoCAD = document.getElementById('modal-autocad');
const cerrarAutoCAD = document.querySelector('.cerrar-proyecto');

if (tarjetaAutoCAD && modalAutoCAD && cerrarAutoCAD) {
    // Capturamos el botón que está dentro de la tarjeta de AutoCAD
    const botonAutoCAD = tarjetaAutoCAD.querySelector('.boton-habilidad');

    if (botonAutoCAD) {
        // Abrir cuadro blanco de proyecto al hacer clic
        botonAutoCAD.addEventListener('click', (e) => {
            e.preventDefault();
            modalAutoCAD.classList.add('mostrar');
        });

        // Cerrar con la X en la esquina superior derecha
        cerrarAutoCAD.addEventListener('click', () => {
            modalAutoCAD.classList.remove('mostrar');
        });

        // Cerrar haciendo clic afuera en el fondo oscuro
        modalAutoCAD.addEventListener('click', (e) => {
            if (e.target === modalAutoCAD) {
                modalAutoCAD.classList.remove('mostrar');
            }
        });
    }
}

