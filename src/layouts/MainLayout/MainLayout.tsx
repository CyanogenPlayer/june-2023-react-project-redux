import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import {useTheme} from "../../hooks";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {darkTheme, setDarkTheme} = useTheme();

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (
        <div className={darkTheme ? css.MainLayout__Dark : css.MainLayout__Light}>
            <Header darkTheme={darkTheme} changeTheme={changeTheme}/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}