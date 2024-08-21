import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import wishlistReducer from './slices/wishlistSlice'
import CartReducer from './slices/cartSlice'
const productStore=configureStore({
    reducer:{
     productReducer,
     wishlistReducer,
     CartReducer
    }
})

export default productStore