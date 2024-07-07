function solve(input) {
const phoneBook = {}

for (const personalDetails of input) {
    const detailsArr = personalDetails.split(" ");
    const name = detailsArr[0];
    const number = detailsArr[1];
    phoneBook[name] = number
}
for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
}
}