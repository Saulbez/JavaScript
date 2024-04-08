let umaString = "Um \"texto\"";
console.log(umaString);

let umaSTR = "O rato roeu a roupa do rei de roma"

console.log(umaSTR.indexOf('roma'))
console.log(umaSTR.indexOf('o', 3)) // começa a procurar partindo do índice 1
console.log(umaSTR.lastIndexOf('rei'))
console.log(umaSTR.lastIndexOf('rei', 30)) // começa a procurar de trás para frente

console.log(umaSTR.concat(' em um lindo dia.'));
console.log(umaSTR + ' em um lindo dia.');
console.log(`${umaSTR} em um lindo dia.`);

console.log(umaSTR.match(/[a-z]/g))

console.log(umaSTR.replace('O', 'Um'))
console.log(umaSTR.slice(-4, -1)) // O valor está sendo subtraído do tamanha total da string
console.log(umaSTR.slice(31, 34))
console.log(umaSTR.substring(umaSTR.length -4, umaSTR.length -1))

console.log(umaSTR.split(' '))
console.log(umaSTR.split(' ', 3))

console.log(umaSTR.toUpperCase())
console.log(umaSTR.toLowerCase())
