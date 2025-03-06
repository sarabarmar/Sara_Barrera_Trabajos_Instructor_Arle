let disponibilidadmesa = true
let mesas = (`1 ,2 ,5 ,8, 16, 27, 35`)

let mensaje = disponibilidadmesa ? `El restaurante tiene las siguentes mesas disponibles ${mesas}, puede ingresar` :
    `Ninguna mesa esta disponible por el momento`

console.log(mensaje);
