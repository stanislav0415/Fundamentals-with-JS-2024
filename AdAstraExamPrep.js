function AdAstra(arr) {
 
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<exp_date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/g
    let str = arr.shift();

    let totalCals = 0;
    let items = [];
    let match = pattern.exec(str);

    while (match) {
        let ItemName = match.groups.item;
        let expDate = match.groups.exp_date;
        let calories = Number(match.groups.cals);
       
        totalCals += calories;

        items.push(`Item: ${ItemName}, Best before: ${expDate}, Nutrition: ${calories}`);

        match = pattern.exec(str);
    }

    let days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}
AdAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])