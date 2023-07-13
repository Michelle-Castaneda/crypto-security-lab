// function decipher () {
//     let abc
//     let newabc = ''

//     for(let i=0; i<abc.length;i++) {
//         let newabc = abc[i] + abc[i]-26
//         abc++
//     }
//     return newabc
// }

const cipher = (message) => {
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let reversedalphabet = alphabet.split('').reverse()
    let cipheredMessage = '';

for(let i=0; i <alphabet.length; i++) {
    for (let j = 0; j <alphabet.length;j++)
    if(alphabet[i] === alphabet[j]) {
        for(let  i=0;reversedalphabet.length;i++)
        alphabet[i] = reversedalphabet[i]
    }


//     let char = message[i].toLowerCase();
//     let index = alphabet.indexOf(char);

//     if (index !== -1) {
//         let cipheredMessage
//     }
// }

// }