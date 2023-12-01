import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import css from './MainLayout.module.css'
import {useAppSelector} from "../../hooks";

const MainLayout = () => {
    const {darkMode} = useAppSelector(state => state.theme);

    return (
        <div className={darkMode ? css.MainLayout__Dark : css.MainLayout__Light}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}