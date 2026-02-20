// sekolah.js

const ambilDataSiswa = require('./database_siswa');

async function main() {

    console.log("Sedang ambil data siswa...");

    let data = await ambilDataSiswa();

    console.log("Data berhasil diambil!");

    // ubah JSON jadi object
    let siswa = JSON.parse(data);

    console.log("Nama siswa :", siswa.nama);
    console.log("Nilai siswa :", siswa.nilai);

    if (siswa.nilai > 75) {
        console.log("Keterangan : LULUS");
    } else {
        console.log("Keterangan : REMEDIAL");
    }

}

main();