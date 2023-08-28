// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip" 
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri


function hipHura(bilangan) {
    for (let i = 1; i <= bilangan; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("HipHura");
        } else if (i % 3 === 0) {
            console.log("Hip");
        } else if (i % 5 === 0) {
            console.log("Hura");
        } else console.log(i);
        
    }console.log("done");
}

hipHura(15);
