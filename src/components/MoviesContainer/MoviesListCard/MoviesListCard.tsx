import {FC} from "react";

import {IMovie} from "../../../interfaces";
import css from './MoviesListCard.module.css'
import {posterBaseURL} from "../../../constants";

interface IProp {
    movie: IMovie
}

const MoviesListCard: FC<IProp> = ({movie}) => {
    const {title, vote_average, poster_path} = movie;
    return (
        <div className={css.MoviesListCard}>
            <img src={posterBaseURL.concat(poster_path)} alt={title}/>
                <div className={css.container}>
                    <h4>{title}</h4>
                    <p>{vote_average}</p>
                </div>
        </div>

    );
};

export {
    MoviesListCard
}