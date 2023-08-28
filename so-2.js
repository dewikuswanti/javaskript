/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - menggunakan infinity looping, mulai dari 0 sampai tak hingga
  - di setiap looping cek apakah ada data pada array di index tersebut?
      - jika ada, count++
      - jika tidak ada, stop looping menggunakan break
*/

const countManual = (arr) => {
  // tulis code di sini
  let count = 0;

  for (let i = 0; ; i++) {
    if (arr[i] === undefined) {
      break;
    }
    count++;
  }

  return count;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countManual(data_array)); // output : 21