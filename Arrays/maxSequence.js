function maxSequence(arr) {
    let el = arr[0];
    let count = 1;
    let arrOfSequence = []
    
    for (let i = 1; i < arr.length; i++) {
           let curEl = arr[i]

           if(el !== curEl) {
            if(count > 1) {
                arrOfSequence.push(el)
                arrOfSequence.push(count)
            }
            el = curEl
            count = 1
            
           } else {
             count++
             
           }

    }
    let maxNum = -1
    let index= 0
    for (let j = 0; j < arrOfSequence.length; j++) {
        let curEl2 = arrOfSequence[j];
        if(j % 2 !== 0) {
            if(maxNum < curEl2){
                maxNum = curEl2
                index = j
            }
        }
    }
    let result =[]
    for (let k = 0; k < maxNum; k++) {
       result.push(arrOfSequence[index-1])
    }
    console.log(result.join(' '))

   
    }
    maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])

