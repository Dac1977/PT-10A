'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
// 1010
// 3210 posiciones > 

let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i] * (2 ** (num.length-1-i));
    // numero binario 1010 
    //        1 * 2**(3-0)
    //        0 * 2**(3-1)
    // ..........
  }
  return sum;
}
//console.log(BinarioADecimal('111111011'));


function DecimalABinario(num) {
  // tu codigo aca
  let div = 0;
  let resto = 0;
  let binario =[];
while (num > 1) {
  resto = num % 2;
  num = Math.floor(num / 2);
  div = num;
  binario.unshift(resto);
}
  binario.unshift(div);
 return binario.join("");
}
//console.log(DecimalABinario(507));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}