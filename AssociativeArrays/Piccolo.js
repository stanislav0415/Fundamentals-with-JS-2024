function piccolo(arr) {
    const cars = new Set();

    for (const carInfo of arr) {
        const [command, carNumber] = carInfo.split(', ')

        if (command === 'IN') {
            cars.add(carNumber)
        } else {
            cars.delete(carNumber)
        }

    }
    const carsArr = Array.from(cars)
    carsArr.sort((a, b) => a.localeCompare(b))
    if (carsArr.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(carsArr.join('\n'));
    }
} piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

)