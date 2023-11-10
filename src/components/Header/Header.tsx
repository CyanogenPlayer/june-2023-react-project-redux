import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <div className={css.Header}>
            <button onClick={navigateHome}>MoviesDB</button>
            {/*TODO add genre name*/}
            {/*TODO add user component*/}
        </div>
    );
};

export {
    Header
}