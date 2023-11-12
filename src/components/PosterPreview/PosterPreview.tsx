import {posterBaseURL} from "../../constants";
import {FC} from "react";

interface IProp {
    poster_path: string,
    title?: string,
    className?: string
}

const PosterPreview: FC<IProp> = ({poster_path, title, className}) => {
    return (
        <>
            {
                poster_path ? (
                    <img className={className} src={posterBaseURL.concat(poster_path)} alt={title}/>
                ) : (
                    <img className={className} src='https://placehold.co/500x750?text=Image+Not+%20Found' alt={title}/>
                )
            }
        </>
    );
};

export {
    PosterPreview
}