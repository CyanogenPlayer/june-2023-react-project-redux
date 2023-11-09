import StarRatings from "react-star-ratings";
import {FC} from "react";

interface IProp {
    rating: number
}

const StarsRating: FC<IProp> = ({rating}) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="darkorange"
            numberOfStars={10}
            name={'rating'}
            starDimension="16px"
            starSpacing="2px"
        />
    );
};

export {
    StarsRating
}