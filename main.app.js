//=======================================
// File: main.app.js
//=======================================

// IMPOR (mengambil alat dari file lain)
const alatHitung = require('./matematika'); // Mengimpor modul matematika.js

let angka1 = 10;
let angka2 = 5;

//menggunakan fungsi dari file matematika.js
let hasilTambahan = alatHitung.tambah(angka1, angka2); // ini akan menambahkan angka1 dan angka2
let hasilKurang = alatHitung.kurang(angka1, angka2); // ini akan mengurangi angka1 dengan angka2

console.log("Hasil tambah: " + hasilTambahan); // nanti akan keluar "Hasil tambah: 15")
console.log("Hasil kurang: " + hasilKurang); // nanti akan keluar "Hasil kurang: 5"
