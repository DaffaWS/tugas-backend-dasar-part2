//=================================
// File: pesan_makanan.js
//=================================

// Simulasi memasak (butuh waktu 2 detik)
function masakNasiGoreng() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Nasi Goreng Spesial 🍳");
        }, 2000); // 2000 milidetik = 2 detik
    });
}

async function pesanMakanan() {
    console.log("1. Pesanan diterima, koki mulai memasak...⏳");

    // AWAIT: kita tunggu di sini, tapi program tidak eror/macet
    // Kode di bawahnya tidak akan jalan sebelum ini selesai.
    const hasilMasakan = await masakNasiGoreng();

    console.log("2. makanan sudah jadi: " + hasilMasakan) // nanti akan keluar "2. makanan sudah jadi: Nasi Goreng Spesial 🍳"
    console.log("3. Selamat Makan! 🍽️");
}

    console.log("--- RESTORAN JS ---");
    pesanMakanan(); // Memanggil fungsi pesanMakanan untuk menjalankan simulasi
    console.log("--- Kasir Melayani Pelanggan Lain ---");
    // Perhatikan teks ini muncul DULUAN sebelum makanan jadi
