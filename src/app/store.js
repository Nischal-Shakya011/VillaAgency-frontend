import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {propertyApi} from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        [propertyApi.reducerPath]: propertyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware),
})
setupListeners(store.dispatch)
