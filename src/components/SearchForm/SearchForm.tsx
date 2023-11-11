import {useNavigate} from "react-router-dom";
import {FC} from "react";

import css from './SearchForm.module.css'

interface IProps {
    searchMovies: (value: string) => void
}

const SearchForm: FC<IProps> = ({searchMovies}) => {
    const navigate = useNavigate();

    const searchMoviesEvent = async (e: any) => {
        e.preventDefault();
        if (e.target.search.value) {
            searchMovies(e.target.search.value);
        } else {
            navigate('/');
        }
        e.target.search.value = '';
    };

    return (
        <form className="d-flex" role="search" onSubmit={searchMoviesEvent}>
            <input className={`form-control me-2 ${css.search}`} type="search" placeholder="Search" name="search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
};

export {
    SearchForm
}