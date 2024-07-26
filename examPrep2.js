function game(arr) {

    let message = arr.shift();
    let command = arr.shift();
    while (command !== "Decode") {
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action === 'Move') {
            let letterCount = Number(tokens.shift());
            let ToMoveLetter = message.substring(0, letterCount);
            message = message.replace(ToMoveLetter, '');
            message += ToMoveLetter;

        } else if(action === 'Insert'){
             let index = Number(tokens.shift());
             let value = tokens.shift();

             message = message.substring(0, index) + value + message.substring(index);
        } else if(action === 'ChangeAll') {
          let substring = tokens.shift();
          let replacement = tokens.shift();
          
          while (message.includes(substring)) {
            message = message.replace(substring, replacement);
          }
         
          
        }

        command = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )