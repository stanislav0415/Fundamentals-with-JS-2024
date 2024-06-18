function distinctArr(arr) {
 let uniqeNums = [];

 for (const num of arr) {
    if(!uniqeNums.includes(num)) {
        uniqeNums.push(num)
    }
 }
 console.log(uniqeNums.join(' '));
}