//=======================================
// File: database_siswa.js
//=======================================

function ambilDataSiswa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('{"id": 1, "nama": "Siswa Teladan", "nilai": 90}');
        }, 2000);
    });
}

module.exports = {
    ambilDataSiswa
};
