// Mensaje de bienvenida
alert("¡Bienvenido a la Biblioteca Virtual!\nAquí puedes agregar, buscar y consultar libros en tu colección.");

// Menú interactivo
let opcion;
do {
    opcion = prompt(
        "¿Qué deseas hacer?\n1. Agregar un libro\n2. Buscar un libro\n3. Mostrar todos los libros\n4. Salir"
    );

    switch (opcion) {
        case "1":
            const titulo = prompt("Ingresa el título del libro:");
            const autor = prompt("Ingresa el autor del libro:");
            agregarLibro(titulo, autor);
            break;

        case "2":
            const tituloBusqueda = prompt("Ingresa el título del libro que deseas buscar:");
            buscarLibro(tituloBusqueda);
            break;

        case "3":
            mostrarLibros();
            break;

        case "4":
            alert("Gracias por usar la Biblioteca Virtual. ¡Hasta luego!");
            break;

        default:
            alert("Opción no válida. Intenta nuevamente.");
    }
} while (opcion !== "4");
