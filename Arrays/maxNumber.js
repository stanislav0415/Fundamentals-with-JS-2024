function maxNum(arr) {
    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if(curNum <= rightNum) {
                isTop = false
                break;
            }
        }
        if(isTop) {
            topNums.push(curNum);
        }
    }
    console.log(topNums.join(" "));
}