import { cargarLibros, agregarLibro, buscarLibro } from './biblioteca.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const biblioteca = await cargarLibros();
        mostrarLibros(biblioteca);

        document.getElementById('btnBuscar').addEventListener('click', () => {
            const titulo = document.getElementById('buscarTitulo').value.trim();
            const libroEncontrado = buscarLibro(biblioteca, titulo);

            if (libroEncontrado) {
                Swal.fire(
                    'Libro Encontrado',
                    `${libroEncontrado.titulo} - ${libroEncontrado.autor} (${libroEncontrado.anio})`,
                    'success'
                );
            } else {
                Swal.fire('Error', 'Libro no encontrado', 'error');
            }
        });

        document.getElementById('btnAgregar').addEventListener('click', () => {
            Swal.fire({
                title: 'Agregar un libro',
                html:
                    '<input id="swal-titulo" class="swal2-input" placeholder="Título">' +
                    '<input id="swal-autor" class="swal2-input" placeholder="Autor">' +
                    '<input id="swal-anio" class="swal2-input" placeholder="Año">' +
                    '<input id="swal-imagen" class="swal2-input" placeholder="URL de la imagen">',
                preConfirm: () => {
                    return {
                        titulo: document.getElementById('swal-titulo').value,
                        autor: document.getElementById('swal-autor').value,
                        anio: document.getElementById('swal-anio').value,
                        imagen: document.getElementById('swal-imagen').value,
                    };
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    const { titulo, autor, anio, imagen } = result.value;
                    biblioteca.push({ titulo, autor, anio, imagen });
                    mostrarLibros(biblioteca);
                }
            });
        });
    } catch (error) {
        console.error('Error cargando los libros:', error);
        Swal.fire('Error', 'No se pudieron cargar los libros', 'error');
    }
});

function mostrarLibros(biblioteca) {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = '';
    biblioteca.forEach(libro => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}">
            <p><strong>${libro.titulo}</strong></p>
            <p>${libro.autor}</p>
            <p>${libro.anio}</p>
        `;
        listaLibros.appendChild(li);
    });
}
