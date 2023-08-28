// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip" 
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri
const bil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pembagiBil = [3, 5];

function cariPembagi(pembagi) {
    for (let i = 1; i <= bil.length; i++) {
        let memenuhiKondisi = false; // Penanda apakah ada kondisi yang terpenuhi

        for (const pembagi of pembagiBil) {
            if (i % pembagi === 0) {
                memenuhiKondisi = true;
                break;
            }
        }

        if (memenuhiKondisi) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("HipHura");
            } else if (i % 3 === 0) {
                console.log("Hip");
            } else if (i % 5 === 0) {
                console.log("Hura");
            }
        } else {
            console.log(i);
        }
    }
    console.log("Done");
}

cariPembagi(pembagiBil);


function hipHura(bilangan) {
   // Fungsi untuk mengevaluasi kategori "Hip", "Hura", atau "Hip Hura"
   if (bilangan % 3 === 0 && bilangan % 5 === 0) {
       return "Hip Hura"; // Jika bilangan habis dibagi 3 dan 5
   } else if (bilangan % 3 === 0) {
       return "Hip"; // Jika bilangan habis dibagi 3
   } else if (bilangan % 5 === 0) {
       return "Hura"; // Jika bilangan habis dibagi 5
   } else {
       return "Tidak termasuk dalam kategori Hip atau Hura"; // Jika tidak memenuhi syarat
   }
}

// Memanggil fungsi hipHura dengan contoh input dan menampilkan outputnya
console.log(hipHura(15)); // Output: "Hip Hura"
console.log(hipHura(6));  // Output: "Hip"
console.log(hipHura(25)); // Output: "Hura"


 