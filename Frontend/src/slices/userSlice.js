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
        }
    }
})

export const { setCredentials,logoutUser } = userSlice.actions
export default userSlice.reducer