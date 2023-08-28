/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

let students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade7 = (dataStudent) => {
  // sesuaikan
    let filteredStudents = [];
  
      // Looping melalui setiap objek siswa dalam array dataStudent
  for (let i = 0; i < dataStudent.length; i++) {
    // Memeriksa apakah nilai grade siswa lebih dari 7
    if (dataStudent[i].grade > 7) {
      // Jika iya, tambahkan objek siswa ke dalam array filteredStudents
      filteredStudents.push(dataStudent[i]);
    }
  }

  // Mengembalikan array siswa yang memenuhi kriteria
  return filteredStudents;
};

// Memanggil fungsi filterGrade7 dengan data siswa sebagai argumen
let filteredStudents = filterGrade7(students);

// Menampilkan hasil filter ke dalam konsol
console.log(filteredStudents);


