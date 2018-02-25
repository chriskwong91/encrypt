const readline = require('readline');
const CryptoJS = require("crypto-js");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you want to encrypt? ', answer => {
  rl.question('What is your secret? ', secret1 => {
    rl.question('Enter your secret again? ', secret2 => {
      if (secret2 !== secret1) {
        console.log('Your secrets did not match, try again!');
      } else {
        console.log('Encrpting....');
        const ciphertext = CryptoJS.AES.encrypt(answer, secret1);
        const cipherString = ciphertext.toString()
        console.log('This is your encrption: ', cipherString)
      }
      rl.close();
    });
  });
});
