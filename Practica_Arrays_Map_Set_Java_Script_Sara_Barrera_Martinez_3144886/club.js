// 6. Imagina que estás desarrollando un sistema para un club de membresía que utiliza un Setpara registrar los números de identificación de los socios activos. El Set inicial contiene: {5001, 5002, 5003}. Ahora, un nuevo socio con el número de identificación 5004 se une al club, y necesitas agregar este número al Set. Dado que Set no permite duplicados, si intentas agregar un número ya existente, como 5001, no debería afectar el conjunto.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para agregar un nuevo elemento al Set de socios activos?
// Código base:

const sociosActivos = new Set ([5001, 5002, 5003]);
sociosActivos.add (5004);
console.log(sociosActivos);
