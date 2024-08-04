function solve2(input) {

    let numberOfInputs = input.shift();
    
    let pattern = /[|]([A-Z]{4,})[|][:][#]([A-Z-a-z]+[ ][A-Z-a-z]+)[#]/
    
    

    for (let i = 0; i < numberOfInputs; i++) {
       let string = input.shift()
       let match = pattern.exec(string);
       if (match === null) {
        console.log("Access denied!");
        
        
       } else {
        let power = match[1].length;
        let armor = match[2].length;
        console.log(`${match[1]}, The ${match[2]}
            >> Strength: ${power}
            >> Armor: ${armor}`);
       }
    }
   
    
    
  



    
}
solve2((['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])
    )