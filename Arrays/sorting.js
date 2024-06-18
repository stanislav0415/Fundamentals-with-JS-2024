function sorting(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let resultArr = [];

    while (sortedArr.length > 0) {
        const firstEl = sortedArr.shift();
        resultArr.push(firstEl)

        const lastEl = sortedArr.pop()
        resultArr.push(lastEl)
        
    }
    console.log(resultArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])