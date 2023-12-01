const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie'
const discover = '/discover'
const genre = '/genre'
const search = '/search'

const urls = {
    movies: {
        allMovies: `${discover}${movie}`,
        byId: (movieId: number): string => `${movie}/${movieId}?append_to_response=credits`
    },
    genres: {
        allGenres: `${genre}${movie}/list`,
        byId: (genreId: number): string => `${genre}/${genreId}`,
        moviesByGenreId: (genreId: number): string => `${genre}/${genreId}/movies`
    },
    search: {
        searchMoviesByPhrase: (phrase: string): string => `${search}${movie}?query=${phrase}`
    }
}

export {
    baseURL,
    urls
}