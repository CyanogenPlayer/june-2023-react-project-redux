import {useSearchParams} from "react-router-dom";
import {useState} from "react";

import {GenresList, MoviesList, Paginate, SearchForm} from "../../components";
import css from './MoviesPage.module.css'
import {useAppSelector} from "../../hooks";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {totalPages} = useAppSelector(state => state.movies);
    const [paginateKey, setPaginateKey] = useState(0);

    const page = query.get('page');
    const genre = query.get('genre');
    const search = query.get('search');

    const searchMovies = (value: string) => {
        setQuery((prev) => {
            prev.set('search', `${value}`);
            prev.set('page', '1');
            prev.delete('genre');
            return prev;
        });
    }

    const genreButtonClick = (genreId: number) => {
        setQuery((prev) => {
            prev.set('genre', `${genreId}`);
            prev.set('page', '1');
            prev.delete('search');
            return prev;
        });
    }

    const paginationButtonClick = (event: { selected: number }): void => {
        setQuery(prev => {
            prev.set('page', `${event.selected + 1}`);
            return prev;
        })
    }

    return (
        <div className={css.MoviesPage}>
            <SearchForm searchMovies={searchMovies}/>
            <GenresList genreButtonClick={genreButtonClick}/>
            <MoviesList page={page} genre={genre} search={search}
                        changePaginateKey={() => setPaginateKey(prevKey => prevKey + 1)}/>
            <Paginate key={paginateKey} initialPage={+page} pageCount={totalPages}
                      onPageChange={paginationButtonClick}/>
        </div>
    );
}

export {
    MoviesPage
}