import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import searchSlice from "./slices/searchSlice";
import myShelfSlice from "./slices/myShelfSlice";

const store = configureStore({
    reducer:{

        [apiSlice.reducerPath]:apiSlice.reducer,
        search:searchSlice,
        myShelf:myShelfSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
        
})

export default store;