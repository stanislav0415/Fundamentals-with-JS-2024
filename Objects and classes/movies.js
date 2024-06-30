function manageMovies(arr) {
    const movies = []

    for (const command of arr) {
        if (command.includes('addMovie')) {
            const tokens = command.split('addMovie ')
            const movieName = tokens[1]

            movies.push({ name: movieName })

        } else if (command.includes('directedBy')) {

            const [movieName, movieDirector] = command.split(' directedBy ')

            const existingMovie = movies.find(movieObj => movieObj.name === movieName)
            if (existingMovie) {
                existingMovie.director = movieDirector;
            }
        } else if (command.includes('onDate')) {

            command.split('onDate')
            const [movieName, date] = command.split(' onDate ')

            const existingMovie = movies.find(movieObj => movieObj.name === movieName)

            if (existingMovie) {
                existingMovie.date = date;
            }
        }
    }
    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));

        }

    }
}