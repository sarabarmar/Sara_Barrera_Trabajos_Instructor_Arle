// Arreglos para los productos y sus cantidades
let productos = ["Dulce", "Gaseosa", "Chicle", "Café", "Agua"];
let stock = [5, 3, 10, 0, 2];

// Función para mostrar el inventario
const mostrarInventario = () => {
    let inventario = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += `${productos[i]}: ${stock[i]} disponible(s)\n`;
    }
    alert(inventario);
};

// Función para procesar el pago y entregar el producto
const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > productos.length) {
        alert("Código de producto inválido.");
    } else if (stock[codigo - 1] === 0) {
        alert(`${productos[codigo - 1]} agotado. Sugerencia: `);
        // Sugerir el primer producto disponible
        for (let i = 0; i < productos.length; i++) {
            if (stock[i] > 0) {
                alert(`Te recomendamos ${productos[i]}.`);
                break;
            }
        }
    } else {
        stock[codigo - 1]--; // Reduce el stock
        alert(`${productos[codigo - 1]} entregado. ¡Disfruta!`);
    }
};

// Menú principal
while (true) {
    let opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}