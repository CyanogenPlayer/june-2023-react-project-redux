import ReactSwitch from "react-switch";
import {FC} from "react";

import {useAppSelector} from "../../hooks";

interface IProps {
    onChange: () => void
}

const ThemeSwitch: FC<IProps> = ({onChange}) => {
    const {darkMode} = useAppSelector(state => state.theme);

    return (
        <ReactSwitch checked={darkMode} onChange={onChange}/>
    );
};

export {
    ThemeSwitch
}