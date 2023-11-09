import {posterBaseURL} from "../../constants";
import {FC} from "react";

interface IProp {
    poster_path: string,
    title?: string,
    className?: string
}

const PosterPreview: FC<IProp> = ({poster_path, title, className}) => {
    return (
        <img className={className} src={posterBaseURL.concat(poster_path)} alt={title}/>
    );
};

export {
    PosterPreview
}