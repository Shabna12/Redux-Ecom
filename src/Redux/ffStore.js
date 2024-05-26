import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSlice from "./Slices/cartSlice";


const ffStore = configureStore({
    reducer:{
       productReducer:productSlice,
       wishlistReducer:wishlistSlice,
       cartReducer:cartSlice,
    },
});


export default ffStore