function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ')

    for (const command of arr) {
        let tokens = command.split(' ');
        const action = tokens.shift();
        const equiepment = tokens.shift();


        if (action === "Buy") {
            if (!inventory.includes(equiepment)) {
                inventory.push(equiepment)
            }
        } else if (action === 'Trash') {
            const equiepmentIdx = inventory.indexOf(equiepment);
            if (equiepmentIdx !== -1) {
                inventory.splice(equiepmentIdx, 1)
            }
        } else if (action === 'Repair') {
            const equiepmentIdx = inventory.indexOf(equiepment)
            if (equiepmentIdx !== -1) {
                inventory.splice(equiepmentIdx, 1);
                inventory.push(equiepment)
            }
        } else {
            let equiepmentTokens = equiepment.split('-');
            const oldEquipment = equiepmentTokens.shift();
            const upgrade = equiepmentTokens.shift();
            const oldEquipmentIdx = inventory.indexOf(oldEquipment);
               if(oldEquipmentIdx !== -1) {
                inventory.splice(oldEquipmentIdx + 1, 0, `${oldEquipment}:${upgrade}`)
               }
            
        
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
    )