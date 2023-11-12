import ReactSwitch from "react-switch";
import {FC, useEffect, useState} from "react";

interface IProps {
    onChange: () => void
}

const ThemeSwitch: FC<IProps> = ({onChange}) => {
    const [checkedState, setState] = useState(true);

    useEffect(() => {
        setState(prev => !prev);
    }, [onChange]);

    return (
        <ReactSwitch checked={checkedState} onChange={onChange}/>
    );
};

export {
    ThemeSwitch
}