function balikKata(inputString) {
    let hurufKata = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      hurufKata += inputString[i];
    }
  
    return hurufKata;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS




  function dashWord(inputString, number) {
    let kataKalimat = null; // Menginisialisasi dengan null
  
    // Loop melalui setiap karakter dalam inputString
    for (let i = 0; i < inputString.length; i++) {
      // Jika dashedString masih null, inisialisasi dengan karakter pertama
      if (kataKalimat === null) {
        kataKalimat = inputString[i];
      } else {
        // Tambahkan karakter ke dalam dashedString
        kataKalimat += inputString[i];
        
        // Cek apakah sudah mencapai jumlah karakter yang ditentukan (number)
        // dan tidak berada di akhir string
        if ((i + 1) % number === 0 && i !== inputString.length - 1) {
          // Jika ya, tambahkan dash (-) ke dalam dashedString
          kataKalimat += '-';
        }
      }
    }
  
    // Jika dashedString masih null, ubah menjadi string kosong
    if (kataKalimat === null) {
        kataKalimat = '';
    }
  
    // Kembalikan hasil string yang sudah dimodifikasi
    return kataKalimat;
  }
  
  // TEST CASES
  console.log(dashWord('Semangat!', 3)); // Sem-ang-at!
  console.log(dashWord('Uzumaki Naruto', 2)); // Uz-um-ak-i -Na-ru-to
  console.log(dashWord('081234567890', 4)); // 0812-3456-7890
  console.log(dashWord('Indonesia Hebat', 10)); // Indonesia -Hebat
  console.log(dashWord('Love Coding', 1)); // L-o-v-e- -C-o-d-i-n-g
  