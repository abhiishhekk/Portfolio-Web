import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    theme : "dark",
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme : (state)=>{
            state.theme = state.theme === 'light' ? 'dark' : 'light' ;
        },
        setTheme : (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;