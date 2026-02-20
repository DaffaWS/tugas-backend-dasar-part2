// database_siswa.js

function ambilDataSiswa() {
    return new Promise(function(resolve) {

        setTimeout(function() {

            // ini pura-pura data dari database sekolah
            let data = '{"id":1,"nama":"Andi Saputra","nilai":78}';

            resolve(data);

        }, 2000); // tunggu 2 detik
    });
}

module.exports = ambilDataSiswa;