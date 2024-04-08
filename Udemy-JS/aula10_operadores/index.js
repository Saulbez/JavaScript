/** 
 * Aritméticos
 * + Adição / Concatenação
 * - / * 
 * ** Potenciação
 * % Resto da divisão
*/

/** 
Precedência
()
**
* / %
+ -
*/

/**
 Incremento = ++
 Decremento = --
 */

const num1 = '5';
const num2 = 10;
console.log(num1 + num2);

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador)

let contador2 = 1;
console.log(contador2++)
console.log(++contador2)

contador--;
contador--;
console.log(contador)

const passo = 2
let contador3 = 0
contador3 = contador3 + passo

console.log(contador3)
contador3 += passo
console.log(contador3)
contador3 += passo
console.log(contador3)
