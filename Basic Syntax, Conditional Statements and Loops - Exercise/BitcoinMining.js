function bitcoinMining (arr) {
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    let Totalmoney = 0;
    let curDay = 1;
    
    for (let i = 0; i < arr.length; i++) {
        let gold = arr[i];

        if(curDay % 3 === 0) {
            gold *= 0.7;
        }

        let moneyFromGold = gold * 67.51;

        Totalmoney += moneyFromGold

            while(Totalmoney >= 11949.16) {
                if(bitcoinCount === 0) {
                    firstBitcoinDay = curDay
                }
                bitcoinCount++;
                Totalmoney -= 11949.16;
            }
            

            curDay++
        }

        console.log(`Bought bitcoins: ${bitcoinCount}`);
        if(bitcoinCount > 0 ) {
            console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        }
      
        
         console.log(`Left money: ${Totalmoney.toFixed(2)} lv.`);

    }