function magicSum(arr,sum) {
for (let i = 0; i < arr.length - 1; i++) {
    let curNum = arr[i]
    let num2 = arr[i + 1]

    if(curNum + num2 === sum) {
        console.log(`${curNum} ${num2}`);
    }
    
}

}
magicSum([1, 7, 6, 2, 19, 23], 8)