function pcStore(arr) {
    let totalPriceNoTax = 0;
    let command = arr.shift();

    while (command !== 'special' && command !== 'regular') {
        let partPriceNoTax = Number(command);

        if (partPriceNoTax <= 0) {
            console.log("Invalid price!");
            command = arr.shift()
            continue;
        }
        totalPriceNoTax += partPriceNoTax;
        command = arr.shift()
    }
    const totalTax = 0.2 * totalPriceNoTax
    let totalPriceWithTax = totalPriceNoTax + totalTax;

    if (command === 'special') {
        totalPriceWithTax *= 0.9;

    }
    if (totalPriceWithTax <= 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$
`);







    }
}