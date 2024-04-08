let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varA1 = varB
let varB1 = varC 
let varC1 = varA

console.log(varA1, varB1, varC1)

// outra forma

let varAs = 'A';
let varBs = 'B';
let varCs = 'C';

const varAsTemp = varAs

varAs = varBs
varBs = varCs
varCs = varAsTemp

console.log(varAs, varBs, varCs)