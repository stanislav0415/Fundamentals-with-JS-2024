function train(arr) {
    let wagon = arr.shift().split(" ").map(Number);
    const capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];

        if (command.includes('Add')) {
            const token = command.split(' ');
            const passenger = Number(token[1]);
            wagon.push(passenger);

        }else {
            const newPassenger = Number(command);

            for (let j = 0; j < wagon.length; j++) {
                if(wagon[j] + newPassenger <= capacity) {
                      wagon[j] += newPassenger;
                      break;
                }
                
            }
        }
        
    }
    console.log(wagon.join(' '));
}