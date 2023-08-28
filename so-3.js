/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini
  let filteredArray = [];

    // Looping melalui setiap elemen dalam array arr
  for (let i = 0; i < arr.length; i++) {
    // Memeriksa apakah nilai elemen saat ini sama dengan nilai yang dicari (searchValue)
    if (arr[i] === searchValue) {
      // Jika iya, tambahkan nilai elemen tersebut ke dalam filteredArray
      filteredArray.push(arr[i]);
    }
  }
  
}

// Mengembalikan array baru (filteredArray) yang hanya berisi nilai yang sesuai dengan searchValue
return filteredArray;


let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ]
