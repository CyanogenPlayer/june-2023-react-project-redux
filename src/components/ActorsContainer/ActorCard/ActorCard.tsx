import React, {FC} from "react";

import {IActor} from "../../../interfaces";
import {PosterPreview} from "../../PosterPreview";
import css from "./ActorCard.module.css";
import {useAppSelector} from "../../../hooks";

interface IProps {
    actor: IActor
}

const ActorCard: FC<IProps> = ({actor}) => {
    const {character, profile_path, name} = actor;

    const {darkMode} = useAppSelector(state => state.theme);

    return (
        <div className={darkMode ? css.ActorCard__Dark: css.ActorCard__Light}>
            <PosterPreview poster_path={profile_path} title={name} className={css.PosterPreview}/>
            <div className={css.Container}>
                <h4>{name}</h4>
                {character && <p>{character}</p>}
            </div>
        </div>
    );
};

export {
    ActorCard
}