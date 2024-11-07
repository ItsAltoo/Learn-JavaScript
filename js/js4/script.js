// ini adalah project angka random dengan hasil bilangan bulat

let math = Math.floor(Math.random() * 5) + 1;

if (math == 1) {
  console.log("ini angka satu",+ math);
} else if (math == 2) {
  console.log("ini adalah angka dua",+ math);
} else if (math == 3) {
  console.log("ini adalah angka tiga",+ math);
} else {
  console.log("ini adalah angka yang tidak di ketahui", + math);
}
