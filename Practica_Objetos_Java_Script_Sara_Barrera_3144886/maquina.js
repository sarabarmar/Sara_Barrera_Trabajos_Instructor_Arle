// Objeto de la máquina expendedora
let maquina = {
    productos: {
        1: { nombre: "Dulce", stock: 5 },
        2: { nombre: "Gaseosa", stock: 3 },
        3: { nombre: "Chicle", stock: 10 },
        4: { nombre: "Café", stock: 0 },
        5: { nombre: "Agua", stock: 2 }
    },

    // Mostrar inventario
    mostrarInventario() {
        let inventario = "Inventario:\n";
        for (let id in this.productos) {
            inventario += `${id}. ${this.productos[id].nombre}: ${this.productos[id].stock} disponibles\n`;
        }
        alert(inventario);
    },

    // Comprar producto
    comprarProducto(codigo) {
        if (!this.productos[codigo]) {
            alert("Código inválido.");
        } else if (this.productos[codigo].stock === 0) {
            alert(`${this.productos[codigo].nombre} está agotado.`);
            // Sugerir otro producto
            for (let id in this.productos) {
                if (this.productos[id].stock > 0) {
                    alert(`Sugerimos comprar ${this.productos[id].nombre}.`);
                    break;
                }
            }
        } else {
            this.productos[codigo].stock--;
            alert(`Has comprado ${this.productos[codigo].nombre}. ¡Disfrútalo!`);
        }
    }
};

// Menú de opciones
while (true) {
    let opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");
    if (opcion === "1") {
        maquina.mostrarInventario();
    } else if (opcion === "2") {
        let codigo = prompt("Ingresa el código del producto (1-5):");
        maquina.comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
