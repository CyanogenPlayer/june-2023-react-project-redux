import {useEffect, useState} from "react";
import {IGenre} from "../../../interfaces";
import {genreService} from "../../../services";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data: {genres}}) => setGenres(genres))
    }, []);

    return (
        <div>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    GenresList
}