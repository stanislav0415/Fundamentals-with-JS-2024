function problem1(input) {

    let msg = input.shift();

    while (input[0] !== 'Reveal') {
        const line = input.shift()
        const tokens = (line.split(":|:"));
        const command = tokens[0];

        switch (command) {
            case "InsertSpace":
                const index = Number(tokens[1]);
                const firstPart = msg.slice(0, index)
                const secondPart = msg.slice(index)
               
                msg = `${firstPart} ${secondPart}`
               
                break;

                case "Reverse":
                const subStr = tokens[1]
                const i = msg.indexOf(subStr);
                
               
                if (i === -1) {
                    console.log("error");
                    continue;

                
                }
                  const left = msg.slice(0, i)
                  const indexToContinueFrom = i + subStr.length
                  const right = msg.slice(indexToContinueFrom)
                  

                  const revesedSubStr = subStr.split("").reverse().join("")
                  msg = `${left}${right}${revesedSubStr}`
                break;

                case "ChangeAll":
                const [_, match, replacement] = tokens
                msg = (msg.split(match).join(replacement));
                break;
        
           
        }
        console.log(msg);
    }
    console.log(`You have a new text message: ${msg}`);
}
problem1([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  
  )