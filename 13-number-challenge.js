const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 100 + 1) / 2;

let sumOutput = `${x} + ${y} = ${x + y}`;
let differenceOutput = `${x} - ${y} = ${x - y}`;
let productOutput = `${x} * ${y} = ${x * y}`;
let quotientOutput = `${x} / ${y} = ${x / y}`;
let remOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remOutput);
