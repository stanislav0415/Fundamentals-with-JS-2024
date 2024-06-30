function towns(arr) {
    for (const townStr of arr) {
      let tokens = townStr.split(' | ');
       let townName = tokens[0]
       let townLatitude  = Number(tokens[1]).toFixed(2)
       let townLongtitude  = Number(tokens[2]).toFixed(2)

       let curentTown =  {
         town: townName,
         latitude: townLatitude,
         longitude: townLongtitude
       };

       console.log(curentTown);
    }
  }