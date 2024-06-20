function equalSums(arr) {
      let isFound = false 

        for (let i = 0; i < arr.length; i++) {
            let sumToLeft = 0;
            let sumToRigth = 0;
            
            for (let j = 0  ; j < i; j++) {
                let numLeft = arr[j];
                sumToLeft += numLeft
                
            }

            for (let k = i + 1; k < arr.length; k++) {
                let numRight = arr[k]
                sumToRigth += numRight;
                
            }

            if (sumToLeft === sumToRigth) {
                console.log(i);
                isFound = true;
                break;
                
            } 
        }
        if (isFound === false) {
            console.log('no');
            
        }
}
equalSums([1,2,3])