import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {GenresList} from "../../GenresContainer";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1', genre: 'all'});
    const [paginateKey, setPaginateKey] = useState(0);

    const page = query.get('page');
    const genre = query.get('genre');

    useEffect(() => {
        if (genre !== 'all') {
            movieService.getByGenreId(+genre, +page).then(({data: {results}}) => setMovies(results));
            setPaginateKey(prevKey => prevKey + 1);
        }
        else {
            movieService.getAll(+page).then(({data: {results}}) => setMovies(results));
        }
    }, [page, genre]);

    const paginationButtonClick = (event: { selected: number }): void => {
        setQuery(prev => {
            prev.set('page', `${event.selected + 1}`);
            return prev;
        })
    }

    const genreButtonClick = (genreId: number) => {
        setQuery((prev) => {
            prev.set('genre', `${genreId}`);
            prev.set('page', '1');
            return prev;
        });
    }

    return (
        <div className={css.Container}>
            <GenresList genreButtonClick={genreButtonClick}/>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <ReactPaginate
                key = {paginateKey}
                pageCount={500}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                onPageChange={paginationButtonClick}
                initialPage={+page - 1}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                containerClassName="pagination mt-4"
                activeClassName="active"
            />
        </div>
    );
};

export {
    MoviesList
}