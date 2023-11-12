import React, {FC} from "react";

import {IActor} from "../../../interfaces";
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import css from "./ActorCard.module.css";
import {useTheme} from "../../../hooks";

interface IProps {
    actor: IActor
}

const ActorCard: FC<IProps> = ({actor}) => {
    const {character, profile_path, name} = actor;

    const {darkTheme} = useTheme();

    return (
        <div className={darkTheme ? css.ActorCard__Dark: css.ActorCard__Light}>
            <PosterPreview poster_path={profile_path} title={name} className={css.PosterPreview}/>
            <div className={css.Container}>
                <h4>{name}</h4>
                <p>{character}</p>
            </div>
        </div>
    );
};

export {
    ActorCard
}