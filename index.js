// Libros predeterminados con imágenes
const librosPredeterminados = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967", imagen: "img/cien-anos-de-soledad.jpg" },
    { titulo: "1984", autor: "George Orwell", anio: "1949", imagen: "img/1984.jpg" },
    { titulo: "Matar a un ruiseñor", autor: "Harper Lee", anio: "1960", imagen: "img/matar-a-un-ruisenor.jpg" },
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", anio: "1925", imagen: "img/great-gatsby.jpg" }
];

// Limpiar el localStorage antes de cargar los libros
localStorage.removeItem('biblioteca');

// Cargar libros desde el localStorage o usar los libros predeterminados
const biblioteca = JSON.parse(localStorage.getItem('biblioteca')) || [...librosPredeterminados];

// Función para guardar los libros en el localStorage
function guardarEnStorage() {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
}

// Función para mostrar todos los libros
function mostrarLibros() {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = ''; // Limpiar la lista antes de agregar los libros

    if (biblioteca.length === 0) {
        listaLibros.innerHTML = '<li>No hay libros en la biblioteca.</li>';
        return;
    }

    biblioteca.forEach((libro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.titulo}" class="imagen-libro">
            <span>${libro.titulo} - ${libro.autor} (${libro.anio})</span>
        `;
        listaLibros.appendChild(li);
    });
}

// Función para agregar un libro
function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const anio = prompt("Ingrese el año de publicación:");
    const imagen = prompt("Ingrese la URL de la imagen del libro:");

    // Validaciones básicas
    if (!titulo || !autor || !anio || !imagen) {
        alert("Todos los campos son obligatorios. Inténtelo de nuevo.");
        return;
    }

    // Agregar libro a la biblioteca y actualizar el storage
    biblioteca.push({ titulo, autor, anio, imagen });
    guardarEnStorage();
    mostrarLibros(); // Actualizar la lista de libros
}

// Función para buscar un libro
function buscarLibro() {
    const tituloBusqueda = document.getElementById('buscarTitulo').value;

    if (tituloBusqueda.trim() === "") {
        alert("Debe ingresar un título válido.");
        return;
    }

    const libroEncontrado = biblioteca.find(libro => libro.titulo.toLowerCase() === tituloBusqueda.toLowerCase());

    if (libroEncontrado) {
        alert(`Libro encontrado:\n${libroEncontrado.titulo} - ${libroEncontrado.autor} (${libroEncontrado.anio})`);
    } else {
        alert("No se encontró ningún libro con ese título.");
    }
}

// Mostrar los libros al cargar la página
mostrarLibros();
