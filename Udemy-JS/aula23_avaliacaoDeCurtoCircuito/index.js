/* 
&& -> false && true -> false "o valor mesmo"
|| -> true e false -> vai retornar o valor verdadeiro

Falsy:
* false
* 0
* '' "" ``
* null / undefined
* NaN

|| retorna o primeiro valor verdadeiro
&& retorna o último valor verdadeiro ou o primeiro falso

*/

function falaOi () {
    return 'OI';
}

let vaiExecutar = NaN;

console.log(vaiExecutar && falaOi())