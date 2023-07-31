'use strict';

function BinarioADecimal(num) {
   var array = num.split('').reverse();
   var suma = 0;
   for (let i = 0; i<array.length; i++){
      suma += (array[i] * Math.pow(2, i))
   }
   return suma;
}

function DecimalABinario(num) {
   var array = [];
   var digi;
   while(num!= 0){
      digi = num%2;
      array.unshift(digi);
      num = Math.floor(num/2);
   }
   var result = array.join('');
   return result;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
