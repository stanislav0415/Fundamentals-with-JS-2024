function MinorTask(arr) {
const resourceQuantities = {};

for (let i = 0; i < arr.length; i += 2) {
    const resource = arr[i];
    const quantity = Number(arr[i + 1])
    
    if (resource in resourceQuantities) {
        resourceQuantities[resource] += quantity;
        
    }else {
        resourceQuantities[resource] = quantity;
    }
}
const entries = Object.entries(resourceQuantities);
for (const [resource , quantity] of entries) {
    console.log(`${resource} -> ${quantity}`);
}
}
MinorTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )