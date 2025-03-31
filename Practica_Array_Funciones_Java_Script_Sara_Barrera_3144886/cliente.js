// Arreglo para almacenar los nombres de los clientes en la cola
let cola = [];

// Función para agregar un cliente a la cola
const agregarCliente = (nombre) => {
    if (cola.length < 7) {
        cola.push(nombre);
        alert(`${nombre} agregado a la cola.`);
    } else {
        alert("La cola está llena. No se puede agregar más clientes.");
    }
};

// Función para atender al siguiente cliente
const atenderCliente = () => {
    if (cola.length > 0) {
        let cliente = cola.shift(); // Elimina y devuelve el primer cliente de la cola
        alert(`Atendiendo a ${cliente}.`);
    } else {
        alert("No hay clientes en la cola.");
    }
};

// Menú principal
while (true) {
    let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Salir\nElige una opción:");
    if (opcion === "1") {
        let nombre = prompt("Ingresa el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}