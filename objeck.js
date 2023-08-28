// Cara membuat object pada javascript
// 1. Object literal
let mahasiswa1 = {
    nama: 'Sandika',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}
let mahasiswa2 = {
    nama: 'Galuh',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}
// 2. Function Declaration
