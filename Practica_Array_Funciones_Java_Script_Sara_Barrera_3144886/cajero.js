// Arreglo para almacenar las últimas 5 transacciones
let transacciones = [0, 0, 0, 0, 0];
let saldo = 0;

// Función para consultar el saldo
const consultarSaldo = () => {
    alert(`Saldo actual: $${saldo}`);
};

// Función para depositar dinero
const depositar = (monto) => {
    saldo += monto;
    transacciones.unshift(monto); // Agrega la transacción al inicio del arreglo
    if (transacciones.length > 5) {
        transacciones.pop(); // Elimina la transacción más antigua si hay más de 5
    }
    alert(`$${monto} depositado correctamente.`);
};

// Función para retirar dinero
const retirar = (monto) => {
    if (monto > 500) {
        alert("No puedes retirar más de $500 en una sola transacción.");
    } else if (monto > saldo) {
        alert("Saldo insuficiente.");
    } else {
        saldo -= monto;
        transacciones.unshift(-monto); // Agrega la transacción de retiro al inicio del arreglo
        if (transacciones.length > 5) {
            transacciones.pop(); // Elimina la transacción más antigua si hay más de 5
        }
        alert(`$${monto} retirado correctamente.`);
    }
};

// Menú principal
while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        consultarSaldo();
    } else if (opcion === "2") {
        let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
        depositar(monto);
    } else if (opcion === "3") {
        let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
        retirar(monto);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}