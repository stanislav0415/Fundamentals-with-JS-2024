function solve(arr) {

    let citiesData = {}
   
    let command = arr.shift()

    while (command !== 'Sail') {
        let tokens = command.split('||');
        let cityName = tokens.shift();
        let cityPopulation = Number(tokens.shift());
        let cityGold = Number(tokens.shift());

        if (cityName in citiesData) {
            citiesData[cityName].population += cityPopulation;
            citiesData[cityName].gold += cityGold;
        } else {
             citiesData[cityName] = { population: cityPopulation, gold: cityGold }
        }

        command = arr.shift();
    }
  
    command = arr.shift()

    while (command !=='End') {
        let tokens = command.split('=>')
        let action = tokens.shift();
        let cityName = tokens.shift();

        if (action === 'Plunder') {
            let peopleKilled = Number(tokens.shift());
            let stolenGold = Number(tokens.shift());

            citiesData[cityName].population -= peopleKilled;
            citiesData[cityName].gold -= stolenGold;

            console.log(`${cityName} plundered! ${stolenGold} gold stolen, ${peopleKilled} citizens killed.`);
            
            if ( citiesData[cityName].population <= 0 || citiesData[cityName].gold <= 0) {
                console.log(`${cityName} has been wiped off the map!`);
                delete citiesData[cityName]
            }

        }else if(action === 'Prosper'){
           let goldAcquaired = Number(tokens.shift());
           
           if (goldAcquaired < 0) {
            console.log("Gold added cannot be a negative number!" );
           }else{
            citiesData[cityName].gold += goldAcquaired
            console.log(`${goldAcquaired} gold added to the city treasury. ${cityName} now has ${citiesData[cityName].gold} gold.`);
           }
        }
        command = arr.shift();
    }
      let cityEntries = Object.entries(citiesData);

      if (cityEntries.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
      } else {
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
        for (const [cityName, cityStats] of cityEntries) {
          console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
        }
      }

       
      }
     


solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    )