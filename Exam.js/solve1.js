function solve1(str) {

    let string = str.shift();
    let command = str.shift();



    while (command !== "End") {
        let tokens = command.split(" ")
        tokens.shift()

        if (command.includes("Translate")) {
           
              let substring = tokens.shift();
              let replacement = tokens.shift();

            while (string.includes(substring)) {
                string = string.replace(substring, replacement)
            }
            console.log(string);
           
        }else if(command.includes("Includes")) {

            let substring = tokens.shift();
            
            if (string.includes(substring)) {
                console.log("True");
                
            }else {
                console.log("False");
                
            }
        }else if(command.includes("Start")) {
            let startsWith = tokens.shift();
            let start = string.substring(0, startsWith.length)
            
             if (startsWith === start) {
                console.log("True");
                
             }else {
                console.log("False");
                
             }
           
        }else if(command.includes("Lowercase")) {
           string = string.toLowerCase()
            console.log(string);
        }else if(command.includes("FindIndex")) {
            let char = tokens.shift()
            for (let i = string.length -1; i >= 0; i--) {
                if (string[i] == char) {
                    console.log(i);
                    break;
                }
            }
        } else if(command.includes("Remove")) {
          let startIndex = tokens.shift()  
          let count = tokens.shift();
          let countEnd = Number(startIndex) + Number(count)
        let test = string.substring(startIndex,countEnd);
           string = string.replace(test,"")
            
       
          console.log(string);
          
        }
        
       
        command = str.shift()
    }
    

}
solve1((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
    
)


