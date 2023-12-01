import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import {useAppSelector} from "../../../hooks";

interface IProp {
    genre: IGenre
    genreButtonClick?: (genreId: number) => void;
}

const GenreBadge: FC<IProp> = ({genre, genreButtonClick}) => {
    const {id, name} = genre;

    const navigate = useNavigate();
    const {darkMode} = useAppSelector(state => state.theme);

    const navigateToMoviesPage = () => {
        if (genreButtonClick) {
            genreButtonClick(id)
        } else {
            navigate(`/movies?genre=${id}`)
        }
    }

    return (
        <div>
            <button onClick={navigateToMoviesPage} className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>{name}</button>
        </div>
    );
};

export {
    GenreBadge
}