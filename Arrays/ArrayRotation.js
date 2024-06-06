function arrRotation(arr,roatation) {
    for (let curRotation = 1; curRotation <= roatation; curRotation++) {
        let element = arr.shift() 
        arr.push(element)
        
    }
}