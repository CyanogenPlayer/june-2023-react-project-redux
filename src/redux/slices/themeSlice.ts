import {createSlice} from "@reduxjs/toolkit";

interface IState{
    darkMode: boolean
}

const initialState: IState = {
    darkMode: false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    }
});

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}