import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div onClick={() => navigate('')}>movies</div>
        </div>
    );
};

export {
    Header
}