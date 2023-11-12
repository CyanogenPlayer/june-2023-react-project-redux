import {useNavigate, useSearchParams} from "react-router-dom";

import css from './Header.module.css'
import {FC, useEffect, useState} from "react";
import {User} from "../User/User";
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";

interface IProps {
    darkTheme: boolean,
    changeTheme: () => void;
}

const Header: FC<IProps> = ({darkTheme, changeTheme}) => {
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
        <div className={`${darkTheme ? css.Header__Dark : css.Header__Light}`}>
            <div className={css.Container}>
                <button onClick={navigateHome} className={`btn ${darkTheme ? 'btn-outline-light' : 'btn-outline-dark'}`}>MoviesDB</button>
                {info && <p>{info}</p>}
                <div className={css.RightPart}>
                    <ThemeSwitch onChange={changeTheme}/>
                    <User/>
                </div>
            </div>
        </div>
    );
};

export {
    Header
}