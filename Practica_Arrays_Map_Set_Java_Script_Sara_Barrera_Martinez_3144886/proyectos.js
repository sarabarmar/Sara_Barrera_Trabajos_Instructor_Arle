// 8. Suponga que estás desarrollando un sistema para una empresa que gestiona proyectos. Tienes un arreglo de Map donde cada Map representa los detalles de un proyecto, con claves como "nombre" y "presupuesto". El arreglo inicial contiene dos proyectos: [{nombre => "Proyecto A", presupuesto => 5000}, {nombre => "Proyecto B", presupuesto => 8000}]. Necesitas agregar un nuevo proyecto al arreglo con los datos {nombre => "Proyecto C", presupuesto => 6000}.
// Pregunta:
// ¿Cuál de las siguientes opciones completa correctamente el código para agregar un nuevo Map con los detalles del "Proyecto C" al arreglo de mapas?
// Código base:

const proyectos = [
    new Map([["nombre", "proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "proyecto B"], ["presupuesto", 8000]])
];

proyectos.push(new Map([["nombre", "Proyecto C"], ["presupuesto", 6000]]));

console.log(proyectos);
