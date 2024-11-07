let x = 5;
let y = 2;
let a = 2;

while (a > 0) {
  x *= y;
  // x *= y sama saja dengan x = x.y, a > 0, 2 > 0, a--, x=5.2=10, 10=10.2=20, maka hasil yang di console adalah 20 //

  a--;
}

console.log(x);
