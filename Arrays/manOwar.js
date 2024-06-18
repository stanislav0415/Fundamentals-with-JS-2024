function manOwar(input) {
    const pirateShip = input.shift().split(">").map(Number);
    const warShip = input.shift().split(">").map(Number);
    const maxHpCapacity = Number(input.shift());
    const critical = maxHpCapacity * 0.2;

    for (const el of input) {


        if (el === "Repair") {
            break;

        }
        const tokens = el.split(" ")
        const command = tokens.shift()


        switch (command) {
            case 'Fire':
                const index = Number(tokens[0])
                const warShipDmg = Number(tokens[1])
                if (warShip[index]) {
                    if (warShip[index] - warShipDmg < 0) {
                        warShip[index] = 0;
                    } else {
                        warShip[index] -= warShipDmg;
                    }
                }
                if (warShip.includes(0)) {
                    console.log("You won! the enemy ship has sunken.");
                    return;
                }
                break;
            case 'Defend':
                const startIndex = Number(tokens[0]);
                const endIndex = Number(tokens[1]);
                const pirateShipDmg = Number(tokens[2])

                if (pirateShip[startIndex]>= 0 && pirateShip[endIndex] >= 0) {
                    for (let index = startIndex; index <= endIndex; index++) {
                        if (pirateShip[index] - pirateShipDmg <= 0) {
                            pirateShip[index] = 0
                        } else {
                            pirateShip[index] -= pirateShipDmg;
                        }

                    }
                }
                if (pirateShip.includes(0)) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
                break;
            case 'Repair':
                const repairIndex = Number(tokens[0])
                const health = Number(tokens[1])

                if (pirateShip[repairIndex]) {
                    if (pirateShip[repairIndex] + health > maxHpCapacity) {
                        pirateShip[repairIndex] = maxHpCapacity
                    } else {
                        pirateShip[repairIndex] += health
                    }
                }

                break;
            case 'Status':
                const allSectionsForRepair = pirateShip.filter(s => s < critical)
                console.log(`${allSectionsForRepair.length} sections need repair.`);
                break;

        }
    }
    let pirateShipStatus = 0
    for (const ship of pirateShip) {
        pirateShipStatus += ship

    }
    let warShipStaus = 0
    for (const ship of  warShip) {
        warShipStaus += ship
    }
    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`War ship status: ${warShipStaus}`);
}
manOwar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])