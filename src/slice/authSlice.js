import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth : false , token:'' , firstName : ''}

const authSlice = createSlice({
    name:'auth',

    initialState,

    reducers: {
        login(state,action){
            state.isAuth = true
            state.token = action.payload.token
            state.firstName = action.payload.firstName
        },

        logout(state,action){
            state.isAuth = false
            state.token = ''
        }
    }
})
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice