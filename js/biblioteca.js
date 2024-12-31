// Funciones de lógica del proyecto
export async function cargarLibros() {
    try {
        const response = await fetch('./db/libros.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return await response.json();
    } catch (error) {
        console.error('Error cargando los libros:', error);
        return []; // Retorna un arreglo vacío en caso de error
    }
}

export function agregarLibro(biblioteca, nuevoLibro) {
    biblioteca.push(nuevoLibro);
    return biblioteca;
}

export function buscarLibro(biblioteca, titulo) {
    return biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}
