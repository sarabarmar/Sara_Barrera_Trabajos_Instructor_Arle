// Objeto del cajero automático
let cajero = {
    saldo: 0,
    transacciones: [],

    // Consultar saldo
    consultarSaldo() {
        alert(`Saldo actual: $${this.saldo}`);
    },

    // Depositar dinero
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.registrarTransaccion(monto);
            alert(`Has depositado $${monto}.`);
        } else {
            alert("Monto inválido.");
        }
    },

    // Retirar dinero
    retirar(monto) {
        if (monto > 500) {
            alert("No puedes retirar más de $500 en una sola transacción.");
        } else if (monto > this.saldo) {
            alert("Saldo insuficiente.");
        } else {
            this.saldo -= monto;
            this.registrarTransaccion(-monto);
            alert(`Has retirado $${monto}.`);
        }
    },

    // Registrar transacción
    registrarTransaccion(monto) {
        this.transacciones.unshift(monto);
        if (this.transacciones.length > 5) {
            this.transacciones.pop();
        }
    }
};

// Menú de opciones
while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        cajero.consultarSaldo();
    } else if (opcion === "2") {
        let monto = parseFloat(prompt("Ingrese el monto a depositar:"));
        cajero.depositar(monto);
    } else if (opcion === "3") {
        let monto = parseFloat(prompt("Ingrese el monto a retirar:"));
        cajero.retirar(monto);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}