/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
      - jika sama, count++
*/

const countData = (arr, searchValue) => {
  // tulis code di sini
  // inisial value
  let count = 0;
// proses looping
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      count++;
    }
  }
// return hasilnya
  return count;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countData(data_array, 5));  // output: 6
