// logical operator
console.log(false && false); //false
console.log(true && false); //false
console.log(false && false); //false
console.log(true && true); //true
console.log(false && true); //false

console.log("Cow" && "Horse"); //Horse

console.log(false || false); //false
console.log(true || false); //true
console.log(true || true); //true
console.log(false || true); // true

console.log("Cow" || "Horse");

console.log(!true);
console.log(!false);

// Bitwise operator
15 & 9;
9;
1111 & 1001; //1001 = 1 * (2 ** 0) + 0 * (2**1) + 0 * (2**2) + 1 * (2**3)

// 15 / 2 = 7(1)
// 7 / 2 = 3(1)
// 3 / 2 = 1(1)

15 | 9;
15;
1111 | 1001;
console.log(1 * 2 ** 0 + 1 * 2 ** 1 + 1 * 2 ** 2 + 1 * 2 ** 3);
console.log(2 ** 2);

// exor
15 ^ 9; //6

9 << 2;

1001 << 2; // shift left position by 2 = 100100 // convert it into decimal

9 >> 2;

console.log("**** Grouping ****");

let p = 1;
let q = 2;
let r = 3;

console.log((p + q) * r);
