import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {GenresList} from "../../GenresContainer";
import {SearchForm} from "../../SearchForm/SearchForm";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({
        page: '1',
        genre: '',
        search: ''
    });
    const [paginateKey, setPaginateKey] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const page = query.get('page');
    const genre = query.get('genre');
    const search = query.get('search');

    const totalPagesSet = (totalPageCount: number) => {
        if (totalPageCount > 500) {
            setTotalPages(500);
        } else {
            setTotalPages(totalPageCount);
        }
    }

    useEffect(() => {
        if (genre && genre !== '') {
            movieService.getByGenreId(+genre, +page).then(({data: {results, total_pages}}) => {
                setMovies(results);
                totalPagesSet(total_pages);
            });
            setPaginateKey(prevKey => prevKey + 1);
        } else if (search && search !== '') {
            movieService.getBySearchPhrase(search, +page).then(({data: {results, total_pages}}) => {
                setMovies(results);
                totalPagesSet(total_pages);
            });
            setPaginateKey(prevKey => prevKey + 1);
        } else {
            movieService.getAll(+page).then(({data: {results, total_pages}}) => {
                setMovies(results)
                totalPagesSet(total_pages);
            });
        }
    }, [page, genre, search]);

    const paginationButtonClick = (event: { selected: number }): void => {
        setQuery(prev => {
            prev.set('page', `${event.selected + 1}`);
            if (genre === '') {
                prev.delete('genre');
            }
            if (search === '') {
                prev.delete('search');
            }
            return prev;
        })
    }

    const genreButtonClick = (genreId: number) => {
        setQuery((prev) => {
            prev.set('genre', `${genreId}`);
            prev.set('page', '1');
            prev.delete('search')
            return prev;
        });
    }

    const searchMovies = (value: string) => {
        setQuery((prev) => {
            prev.set('search', `${value}`);
            prev.set('page', '1');
            prev.delete('genre')
            return prev;
        });
    }

    return (
        <div className={css.Container}>
            <SearchForm searchMovies={searchMovies}/>
            <GenresList genreButtonClick={genreButtonClick}/>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <ReactPaginate
                key = {paginateKey}
                pageCount={totalPages}
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