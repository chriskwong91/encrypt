const readline = require('readline');
const CryptoJS = require("crypto-js");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you want to decrypt? ', answer => {
  rl.question('What is your secret? ', secret1 => {
    rl.question('Enter your secret again? ', secret2 => {
      if (secret2 !== secret1) {
        console.log('Your secrets did not match, try again!');
      } else {
        console.log('Decrypting....');
        const bytes  = CryptoJS.AES.decrypt(answer, secret1);
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);
        console.log('This is your decrypted message: ', plaintext)
      }
      rl.close();
    });
  });
});
