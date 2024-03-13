import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

const store=configureStore({
    //path of the reducer
    reducer:{
        [api.reducerPath]: api.reducer,
    },
    devTools:true,
    // Adding the api middleware enables caching, invalidation, polling,
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(api.middleware)
    )
});

export default store;