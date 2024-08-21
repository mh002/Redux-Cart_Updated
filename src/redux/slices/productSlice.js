import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchProductThunk=createAsyncThunk('products/fetchProductThunk',async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    localStorage.setItem("response",JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        product:[],
        loading:false,
        productContainer:[],
        error:'',
        productsPerPage:10,
        currentPage:1
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.product=state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        },
        onNavigatePrev:(state,action)=>{
            state.currentPage--
        },
        onNavigateNext:(state,action)=>{
            state.currentPage++
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productContainer=action.payload
        }),
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.product=[],
            state.error="Request Failed!"
        })
        
    }

})

export const{searchProduct,onNavigateNext,onNavigatePrev}=productSlice.actions
export default productSlice.reducer
