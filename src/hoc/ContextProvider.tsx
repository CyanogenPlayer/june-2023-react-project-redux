import {createContext, FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {
}

const Context = createContext(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState(false);
    const [search, setSearch] = useState(null)

    return (
        <div>
            <Context.Provider value={{state, search, setSearch}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
}