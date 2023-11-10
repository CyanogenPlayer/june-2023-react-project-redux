import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProp {
    genre: IGenre
    genreButtonClick?: (genreId: number) => void;
}

const GenreBadge: FC<IProp> = ({genre, genreButtonClick}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    const navigateToMoviesPage = () => {
        if (genreButtonClick) {
            genreButtonClick(id)
        } else {
            navigate(`/movies?genre=${id}`)
        }
    }

    return (
        <div>
            <button onClick={navigateToMoviesPage}>{name}</button>
        </div>
    );
};

export {
    GenreBadge
}