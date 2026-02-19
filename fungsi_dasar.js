//=================================
// file: fungsi_dasar.js
//=================================

// 1. Membuat fungsi (menulis resep)
function sapaSiswa(nama) {
    return "Halo, " + nama + "! Selamat belajar Backend👋😁. ";
}

function hitungLuasPersegi(sisi) {
    let luas = sisi * sisi;
    return luas;
}

// 2.memanggil fungsi (Memasak)
let pesan1 = sapaSiswa("Budi");
let pesan2 = sapaSiswa("Siti");

console.log(pesan1); // nanti akan keluar "Halo, Budi selamat belajar Backend👋😁. "
console.log(pesan2); // nanti akan keluar "Halo, Siti selamat belajar Backend👋😁.
// 
// Mengghitung Langsung di dalam console
console.log("Luas tanah: " + hitungLuasPersegi(10) + "meter"); // nanti akan keluar "Luas tanah: 100 meter"
console.log("luas meja: " + hitungLuasPersegi(5) + "meter"); // nanti akan keluar "Luas meja: 25 meter"