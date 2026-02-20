//============================================
// File: latihan_json.js
//============================================

// 1. Object JavaScript (Bentuk asli di kode kita)
const siswa = {
    nama: "Reza",
    umur: 16,
    hobi: ["Coding", "Game"]
};

console.log("--- BENTUK ASLI (OBJECT) ---");
console.log(siswa);

// 2. STRINGIFY: Mengubah Object jadi Teks JSON (Untuk dikirim ke internet)
const dataKirim = JSON.stringify(siswa);

console.log("\n--- BENTUK JSON (TEKS) ---");
console.log(dataKirim);
// Perhatikan: JSON itu teks panjang, kuncinya pakai kutip dua ""

// 3. PARSE: Menerima Teks JSON jadi Object (Agar bisa diolah)
const dataTerima = '{"nama":"Budi","umur":17,"hobi":["Futsal"]}';
const siswaBaru = JSON.parse(dataTerima);

console.log("\n--- HASIL PARSE ---");
console.log("Nama siswa baru: " + siswaBaru.nama);
