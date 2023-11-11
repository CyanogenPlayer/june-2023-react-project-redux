import {createContext, FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {
}

const Context = createContext(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState(false);

    return (
        <div>
            <Context.Provider value={{state}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
}