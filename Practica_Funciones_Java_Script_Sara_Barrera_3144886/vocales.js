const vocalA = str => {
    str = str.toLowerCase()
    let va = 0
    for (let a = 0; a < str.length; a++) {
        const char = str[a]
        if (char === `a`)
            va++
    }
    return va
}
console.log(vocalA("Sara"));
console.log(vocalA("Barrera"));
console.log(vocalA("Martinez"));
