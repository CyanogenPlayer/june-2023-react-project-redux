import {FC, useEffect} from "react";

import {GenreBadge} from "../GenreBadge";
import css from "./GenresList.module.css"
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../redux";

interface IProp {
    genreButtonClick: (genreId: number) => void;
}

const GenresList: FC<IProp> = ({genreButtonClick}) => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.GenresList}>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre} genreButtonClick={genreButtonClick}/>)}
        </div>
    );
};

export {
    GenresList
}