// if statement
// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5){
//     console.log("Angka lebih besar dari 0.5");
// }
// if(angka <= 0.5) {
//     console.log("Angka Lebih Kecil dari 0.5")
// }


// if statemen banyak pilihan
// const iniHari = prompt('isikan hari!').toLowerCase();
// toLowerCase itu untuk mengisikan huruf dengan bebas (huruf kapital maupun biasa)

// if (iniHari === 'sabtu' ){
//  console.log('selamat liburan');
// }
// else if(iniHari === 'selasa'){
//  console.log('selamat bekerja');
// }
// else {
//     console.log('hari biasa aja');
// }
// const nilai = '69';
// if(nilai <40) {
//     console.log('E');
// } else if (nilai <60){
//     console.log('D');
// } else if (nilai <70){
//     console.log('C');
// } else if (nilai <80){
//     console.log('B');
// } else if (nilai <100){
//     console.log('A');
// }


// const password = prompt('buat password');
// paswd harus sepanjang 6 karakter

// if (password.length >=6){
//     if(password.indexOf(' ') === -1){
//         console.log('Password valid');
//     } else {
//         console.log('Password tidak boleh ada spasi')
//     }
// } else {
//     console.log('Password minimal 6 karakter')
// }

// if dengan menggunakan AND && (KONDISI SEMUANYA HARUS BENAR)
// if (password.length>=6 && password.indexOf(' ') === -1 ){
//     console.log('password valid')
// }
// else{
//     console.log('password tidak memenuhi syarat')
// }


// if or ( || )
// const  role = prompt('Masukkan role akun')
// if (role === 'admin' || role == 'spv') {
//     console.log('boleh mengaksesnya')
// }
// else{
//     console.log('akses ditolak')
// }

// if not (!) kebalikannya (selain admin)
const  role = prompt('Masukkan role akun')
if (role !== 'admin') {
    console.log('boleh mengaksesnya')
}
else{
    console.log('akses ditolak')
}