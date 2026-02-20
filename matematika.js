//================================
// file: matematika.js
//================================

function tambah(a, b) {
    return a + b; // Mengembalikan hasil penjumlahan a dan b
}

function kurang(a, b) {
    return a -b; // Mengembalikan hasil pengurangan a dan b
}

//EKSPOR (agar bisa digunakan file lain)
module.exports = {
    tambah,
    kurang
}