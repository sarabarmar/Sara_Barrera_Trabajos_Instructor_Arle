const multiplicarDigitos = num => {
    const numString = Math.abs(num).toString()

    let multiplicar = 1
    for (let a = 0; a < numString.length; a++) {
        const digito = parseInt(numString[a])
        multiplicar *= digito
    }

    return multiplicar

}
console.log(multiplicarDigitos(9));
console.log(multiplicarDigitos(564));

