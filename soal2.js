// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
const array = [31, 9, 54, 11, 43, 6, 67];

function maxMin(array) {
    // Inisialisasi nilai maksimum dan minimum dengan nilai dari elemen pertama array
    let max = array[0];
    let min = array[0];

    // Loop melalui array untuk mencari nilai maksimum dan minimum
    for (let i = 1; i < array.length; i++) {
        // Jika elemen saat ini lebih besar dari nilai maksimum, perbarui nilai maksimum
        if (array[i] > max) {
            max = array[i];
        }
        // Jika elemen saat ini lebih kecil dari nilai minimum, perbarui nilai minimum
        if (array[i] < min) {
            min = array[i];
        }
    }

    // Kembalikan objek yang berisi nilai maksimum dan minimum
    return { max, min };
}

console.log(maxMin(array)); // Output: { max: 67, min: 6 }
