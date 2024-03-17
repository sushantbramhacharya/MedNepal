import { createSlice } from "@reduxjs/toolkit";



const userSlice= createSlice({
    name: "userSlice",
    initialState: {},
    reducers:{
        setCredentials:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        }
    }
})

export const { setCredentials } = userSlice.actions
export default userSlice.reducer