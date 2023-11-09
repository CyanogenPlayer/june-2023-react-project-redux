import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        movieService.getAll(+page).then(({data: {results}}) => setMovies(results));
    }, [page]);

    const paginationButtonClick = (event: { selected: number }): void => {
        setQuery(prev => {
            prev.set('page', `${event.selected + 1}`);
            return prev;
        })
    }

    return (
        <div className={css.Container}>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <ReactPaginate
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