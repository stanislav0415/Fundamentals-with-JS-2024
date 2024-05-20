function numbers (num1 ,precision) {
    if(precision > 15) {
        precision = 15;
    }
    let fixedNum = num1.toFixed(precision)
    let trimmedNum = parseFloat(fixedNum)
    console.log(trimmedNum);
     
}