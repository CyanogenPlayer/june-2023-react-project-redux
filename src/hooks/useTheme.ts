import {useAppContext} from "./useAppContext";

const useTheme = () => {
    const {state} = useAppContext();
    const [darkTheme, setDarkTheme] = state;

    return {
        darkTheme,
        setDarkTheme
    }
}

export {
    useTheme
}