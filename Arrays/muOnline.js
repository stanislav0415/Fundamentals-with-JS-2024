function muOnline(input) {
    let hp = 100;
    let loot = 0;

    const rooms = input.split("|")

    for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i].split(" ");
        const command = room[0]
        let value = Number(room[1]);

        if (command === 'potion') {

            if (hp + value > 100) {
                value = 100 - hp

            }
            hp += value

            console.log(`You healed for ${value} hp.`);
            console.log(`Current health ${hp}hp.`);

        } else if (command === 'chest') {
            loot += value
            console.log(`You found ${value} bitcoins.`);
        } else {
            hp -= value
            if (hp <= 0) {
                console.log(`You died! Killed by ${command}`);
                console.log(`Best room ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${command}`);
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins ${loot}.`);
    console.log(`Health ${hp}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")