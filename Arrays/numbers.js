function numbers(str) {
  let numsArr = str.split(' ').map(Number)

  let numsSum = 0;

  for (const num of numsArr) {
    numsSum += num
  }

  const numAvg = numsSum / numsArr.length;

  const filteredNums = numsArr.filter(num => num > numAvg);

  if (filteredNums.length === 0) {
    console.log('no');
  }
  else {

    const sortedNums = filteredNums.sort((a, b) => b - a);

    const top5Nums = sortedNums.slice(0, 5);
  
    console.log(top5Nums.join(' '));
  }

}
numbers('1')