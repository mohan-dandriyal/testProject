import { configureStore } from "@reduxjs/toolkit";
import { CartSlice, SearchItem, getdata, ToogleModale } from "./CartSlice/CartSlice";

const store = configureStore({
    reducer: {
        apiInt: getdata.reducer,
        carts: CartSlice.reducer,
        search: SearchItem.reducer,
        toggle : ToogleModale.reducer
    } 
},
)

export default store
