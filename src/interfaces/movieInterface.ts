import {IGenre} from "./genreInterface";
import {IActor} from "./actorInterface";
import {IMemberOfCrew} from "./memberOfCrewInterface";

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    genres: IGenre[]
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    credits: {
        cast: IActor[],
        crew: IMemberOfCrew[]
    }
}