import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProp {
    genre: IGenre
}

const GenreBadge: FC<IProp> = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(`/movies?genre=${id}`)}>{name}</button>
        </div>
    );
};

export {
    GenreBadge
}