// Objeto para gestionar la cola de clientes
let supermercado = {
    cola: [],

    // Agregar cliente a la cola
    agregarCliente(nombre) {
        if (this.cola.length < 7) {
            this.cola.push(nombre);
            alert(`${nombre} ha sido agregado a la cola.`);
        } else {
            alert("La cola está llena.");
        }
    },

    // Atender al siguiente cliente
    atenderCliente() {
        if (this.cola.length > 0) {
            let cliente = this.cola.shift();
            alert(`Atendiendo a ${cliente}.`);
        } else {
            alert("No hay clientes en la cola.");
        }
    }
};

// Menú de opciones
while (true) {
    let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Salir\nElige una opción:");
    if (opcion === "1") {
        let nombre = prompt("Ingresa el nombre del cliente:");
        supermercado.agregarCliente(nombre);
    } else if (opcion === "2") {
        supermercado.atenderCliente();
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
