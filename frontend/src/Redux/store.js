import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Cart/cartSlice"
import productsReducer from "./AllProducts/productSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        products: productsReducer
    }
})