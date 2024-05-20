function printSum (start, end) {
    let sum = 0;
    let allNums = '';
  
    for (let i = start; i <= end; i++){
         sum += i;
         allNums += i + ' ';
    
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);
   }