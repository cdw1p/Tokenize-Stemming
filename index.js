const word = require('nalapa').word
const tokenizer = require('nalapa').tokenizer

;(async() => {
  const inputKalimat = 'Dua hari kemudian aku dan Seli memutuskan menonton Ali berlatih. Aku akhirnya memang tahu kenapa Ali bisa bergabung dengan tim basket. Lihatlah, sepuluh kali Ali diminta melemparkan bola ke keranjang dari jarak 6,75 meter, dari area tiga poin, sewaktu latihan shooting, dia tidak gagal walau sekali. Juga saat mendribel bola, gerakan Ali lincah, tidak ada yang bisa merebut bola darinya. Kapten tim dan murid kelas dua belas bertepuk tangan menyemangati, menepuk-nepuk bahu Ali. Itu hebat sekali, bahkan pemain profesional butuh latihan panjang untuk melakukannya, Tapi Ali." Jangankan melihat dia memegang bola basket, di benakku, yang ada hanyalah bayangan dia sering diusir guru karena bertingkah saat pelajaran olahraga. Aku menghela napas perlahan. Pasti ada sesuatu di baliknya. Si biang kerok ini pasti berbuat curang.'
  const inputKalimatTokenize = tokenizer.tokenize(inputKalimat)
  console.log(`+ Kalimat Asli :\n${inputKalimat}\n-`)
  console.log(`+ Kata Token :\n${[...new Set(inputKalimatTokenize)].join(', ')}]\n-`)
  console.log(`+ Kata Stemming :`)
  for (kata of inputKalimatTokenize) {
    if (kata.match(/^[A-Za-z]+$/g) && kata !== word.stem(kata)) {
      console.log(` - Kata Dasar "${kata}" => ${word.stem(kata)}`)
    }
  }
})()