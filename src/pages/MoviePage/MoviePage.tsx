import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";
import {FC} from "react";

const MoviePage: FC = () => {
    const {movieId} = useParams<{ movieId: string }>();

    return (
        <div>
            <MovieInfo key={movieId} movieId={movieId}/>
        </div>
    );
};

export {
    MoviePage
}