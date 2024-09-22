// Tugas Pertama:Variable dan Tipe Data

let nama = "Malik Sabarullah Akbar";
let umur = 18;
let hobi = ["menggambar", "Desain grafis"];

console.log(nama);
console.log(umur);
console.log(hobi);

// Tugas 2:Operator Matematika
let angka1 = parseInt(prompt("masukkan angka pertama"));
let angka2 = parseInt(prompt("masukkan angka kedua"));

let penjumlahan = angka1 + angka2;
let pengurangan = angka1 - angka2;
let perkalian = angka1 * angka2;
let pembagian = angka1 / angka2;

console.log([
  "hasil dari penjumlahan adalah :" + penjumlahan,
  "hasil dari pengurangan adalah :" + pengurangan,
  "hasil dari perkalian adalah :" + perkalian,
  "hasil dari pembagian adalah :" + pembagian,
]);

// Saran :
/* console.log(
  "Hasil dari penjumlahan adalah: " + penjumlahan + "\n" +
  "Hasil dari pengurangan adalah: " + pengurangan + "\n" +
  "Hasil dari perkalian adalah: " + perkalian + "\n" +
  "Hasil dari pembagian adalah: " + pembagian
); */

// Tugas 3:Kondisional If-Else
let nilaiUjian = parseInt(prompt("masukkan nilai ujian anda:"));

if (nilaiUjian >= 80) {
  console.log("Selamat anda lulus");
} else {
  console.log("Maaf Anda Tidak lulus");
}

// Saran :
/* if (nilaiUjian >= 80) {
  console.log("Selamat, Anda lulus dengan nilai baik!");
} else if (nilaiUjian >= 60) {
  console.log("Anda lulus, tetapi perlu lebih belajar.");
} else {
  console.log("Maaf, Anda tidak lulus.");
} */

/* Tugas 4:Perulangan (Loop) */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Tugas 5:Fungsi (Function)
let a = parseInt(prompt("masukkan luas persegi A"));
let b = parseInt(prompt("masukkan luas persegi B"));

function persegi() {
  return a * b;
}

console.log(persegi());

/* Kesalahan Logika :

function luasPersegi(sisi) {
  return sisi * sisi;
}

let a = parseInt(prompt("Masukkan sisi persegi A"));
let b = parseInt(prompt("Masukkan sisi persegi B"));

console.log("Luas persegi A: " + luasPersegi(a));
console.log("Luas persegi B: " + luasPersegi(b)); */

// Tugas 6:Array dan loop
let teman = ["ali", "budi", "cic", "dani", "eko"];

for (let i = 0; i < teman.length; i++) {
  console.log(`teman saya ke - ${i}:${teman[i]}`);
}

/* Saran:

for (let i = 0; i < teman.length; i++) {
  console.log(`Teman saya ke-${i + 1}: ${teman[i]}`);
}
  */

// Tugas 7:Event Handling di browser
function tombol() {
  console.log(alert("Tombol di tekan!!"));
}

/* Saran:

function tombol() {
  alert("Tombol ditekan!");
}
*/
