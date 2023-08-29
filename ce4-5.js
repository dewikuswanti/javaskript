// soal ce4

let data = [
    {
        title: "The Only Guide You Need",
        score: 8,
        status: "Posted"
    },
    {
        title: "The Advanced Guide To Archive",
        score: 5,
        status: "Unposted"
    },
    {
        title: "In Defense of the Figurative Use of Literally.",
        score: 6,
        status: "Unposted"
    },
    {
        title: "The Best Ways to Do Market Research For Your Business Plan",
        score: 7,
        status: "Unposted"
    },
    {
        title: "The Only Guide You Need Part 2",
        score: 8,
        status: "Unposted"
    },
]

function Jobs(array) {
  // Loop melalui setiap item dalam array
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    // Periksa apakah skornya lebih besar dari atau sama dengan 7 dan statusnya "Unposted"
    if (item.score >= 7 && item.status === "Unposted") {
      // Ubah status menjadi "Posted"
      item.status = "Posted";
    }
  }

  // Kembalikan array yang telah dimodifikasi
  return array;
}

console.log(Jobs(data));


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

