function solve(arr) {

    let resourceQty = {}


    for (let i = 0; i < arr.length; i += 2) {
       
        const resource = arr[i]
        const quantity = Number(arr[i + 1 ])

        if(resource in resourceQty) {
            resourceQty[resource] += quantity
        }else {
            resourceQty[resource] + quantity
        }

        resourceQty[resource] = quantity
    }

    const resourceEnrties = Object.entries(resourceQty)
    for (const [resource, quantity] of resourceEnrties) {
       console.log(`${resource} -> ${quantity}`);
    }
}
solve([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])