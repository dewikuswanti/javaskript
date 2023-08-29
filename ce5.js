// soal ce5

function removeDuplicates(str) {
    const uniqueChars = []; // Untuk menyimpan karakter-karakter unik
    
    // Loop melalui setiap karakter dalam string masukan
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Periksa apakah karakter belum ada dalam array uniqueChars
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char); // Tambahkan karakter ke dalam array
        }
    }
    
    return uniqueChars; // Kembalikan array karakter-karakter unik
}

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));

