import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const isUserLogin = createAsyncThunk('userSlice',
    async () => {
        const existLocalStorage = localStorage.getItem('isLogin');
        return existLocalStorage && JSON.parse(existLocalStorage);
     });

const initialState = {
    isLogin: false,
};

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        userLogin: (state, action) => {
                localStorage.setItem('isLogin', JSON.stringify(action.payload));
                state.isLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(isUserLogin.fulfilled, (state, action) => {
            state.isLogin = action.payload;
        })
    }
})

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;