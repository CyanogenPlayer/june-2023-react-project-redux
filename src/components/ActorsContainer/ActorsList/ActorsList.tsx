import {FC} from "react";

import {IActor} from "../../../interfaces";
import {ActorCard} from "../ActorCard";
import css from './ActorsList.module.css'

interface IProps {
    actors: IActor[]
}

const ActorsList: FC<IProps> = ({actors}) => {
    return (
        <>
            <p>Cast:</p>
            <div className={css.ActorsList}>
                {actors && actors.map(actor => <ActorCard key={actor.id} actor={actor}/>)}
            </div>
        </>
    );
};

export {
    ActorsList
}