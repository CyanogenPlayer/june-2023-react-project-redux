import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import css from './Header.module.css'
import {User} from "../User";
import {ThemeSwitch} from "../ThemeSwitch";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";

const Header = () => {
    const {darkMode} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [info, setInfo] = useState(null)

    const genre = query.get('genre');
    const search = query.get('search');

    useEffect(() => {
        if (genre) {
            setInfo(genre)
        } else if (search) {
            setInfo(search)
        } else {
            setInfo(null)
        }
    }, [genre, search]);

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <div className={`${darkMode ? css.Header__Dark : css.Header__Light}`}>
            <div className={css.Container}>
                <button onClick={navigateHome} className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>MoviesDB</button>
                {info && <p>{info}</p>}
                <div className={css.RightPart}>
                    <ThemeSwitch onChange={() => dispatch(themeActions.changeDarkMode())}/>
                    <User/>
                </div>
            </div>
        </div>
    );
};

export {
    Header
}