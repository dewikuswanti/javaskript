
// Contoh 1 (height = 3):
console.log("contoh 1 (height = 3):");
let height1 = 3;

// Loop pertama untuk mengatur baris
for (let i = height1; i > 0; i--) {
    // Inisialisasi string kosong untuk setiap baris
    let line = "";

    // Loop kedua untuk mengatur angka pada setiap baris
    for (let j = i; j > 0; j--) {
        line += j; // Menambahkan angka ke dalam string line
    }

    console.log(line); // Cetak baris yang telah dibentuk
}

// Contoh 2 (height = 5):
console.log("contoh 2 (height = 5):");
let height2 = 5;

// Loop pertama untuk mengatur baris
for (let i = height2; i > 0; i--) {
    // Inisialisasi string kosong untuk setiap baris
    let line = "";

    // Loop kedua untuk mengatur angka pada setiap baris
    for (let j = i; j > 0; j--) {
        line += j; // Menambahkan angka ke dalam string line
    }

    console.log(line); // Cetak baris yang telah dibentuk
}



// Fungsi untuk menggambar kartu domino dengan angka di tengah
function drawDominoCard(centerNumber) {
    const cardWidth = 10;    // Lebar kartu
    const cardHeight = 9;    // Tinggi kartu
    
    // Loop untuk menggambar setiap baris kartu
    for (let row = 1; row <= cardHeight; row++) {
      let line = '';  // Inisialisasi baris
  
      // Loop untuk menggambar setiap kolom dalam satu baris
      for (let col = 1; col <= cardWidth; col++) {
        // Membuat bingkai luar kartu
        if (row === 1 || row === cardHeight) {
          line += '*';   // Tambahkan karakter '*' di tepi atas dan bawah kartu
        } else if (col === 1 || col === cardWidth) {
          line += '*';   // Tambahkan karakter '*' di tepi kiri dan kanan kartu
        }
        // Membuat garis tengah kartu
        else if (row === Math.ceil(cardHeight / 2)) {
          line += '*'; // Mengisi dengan karakter '*' sesuai lebar kartu (kecuali tepi)
        }
        // Membuat sub kotak bagian atas dengan angka di tengahnya
        else if (row === Math.ceil(cardHeight / 2) - 1) {
          if (col === Math.ceil(cardWidth / 2)) { 
            line += '' + centerNumber + ''; // Menambahkan angka di tengah
          } else {
            line += ' '; // Mengisi dengan spasi di sekitar angka
          }
        }
        // Membuat sub kotak bagian bawah dengan angka di tengahnya
        else if (row === Math.ceil(cardHeight / 2) + 1) {
          if (col === Math.ceil(cardWidth / 2)) {
            line += '' + centerNumber + ''; // Menambahkan angka di tengah
          } else {
            line += ' '; // Mengisi dengan spasi di sekitar angka
          }
        }
        // Mengisi area lain dengan spasi
        else {
          line += ' ';
        }
      }
      console.log(line);  // Menampilkan baris kartu
    }
  }
  
  // Contoh pemanggilan fungsi untuk menggambar kartu domino dengan angka 3
  drawDominoCard(3);
  console.log();
  
  // Contoh pemanggilan fungsi untuk menggambar kartu domino dengan angka 5
  drawDominoCard(5);
  