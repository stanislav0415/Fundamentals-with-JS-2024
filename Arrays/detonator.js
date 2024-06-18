function detonator(sequenceOfNum, bomb) {
    const bombNum = bomb.shift();
    const power = bomb.shift();

    let indexOfBomb = sequenceOfNum.indexOf(bombNum);
    while (indexOfBomb !== -1) {
        if (indexOfBomb - power < 0) {
            sequenceOfNum.splice(0, power + 1 + indexOfBomb);
        } else {
            sequenceOfNum.splice(indexOfBomb - power, power * 2 + 1);
        }
        indexOfBomb = sequenceOfNum.indexOf(bombNum)
    }
    let sum = 0;
    for (let index = 0; index < sequenceOfNum.length; index++) {
        sum += sequenceOfNum[index];
    }
    console.log(sum)
}
detonator([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]    
);