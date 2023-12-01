import {FC, useEffect, useState} from "react";

import {genreService} from "../../../services";
import {GenreBadge} from "../GenreBadge";
import {IGenre} from "../../../interfaces";
import css from "./GenresList.module.css"

interface IProp {
    genreButtonClick: (genreId: number) => void;
}

const GenresList: FC<IProp> = ({genreButtonClick}) => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data: {genres}}) => setGenres(genres))
    }, []);

    return (
        <div className={css.GenresList}>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre} genreButtonClick={genreButtonClick}/>)}
        </div>
    );
};

export {
    GenresList
}