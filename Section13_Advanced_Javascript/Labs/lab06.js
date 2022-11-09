// symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(sym2 === sym3);
