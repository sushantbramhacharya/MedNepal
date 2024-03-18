import { createSlice } from "@reduxjs/toolkit";



const userSlice= createSlice({
    name: "userSlice",
    initialState: {user:{...(JSON.parse(localStorage.getItem('user')))}},
    reducers:{
        setCredentials:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        },
        logoutUser:(state,action)=>{
            state.user="";
            localStorage.removeItem('user');
        },
        setCarts:(state,action)=>{
            state.user.cart=action.payload;
            localStorage.setItem('user',JSON.stringify(state.user));
        }
    }
})

export const { setCredentials,logoutUser,setCarts } = userSlice.actions
export default userSlice.reducer