import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items:[],
    loading:"idle",
    error:null
}

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.id;

      const res = await axios.get(
        `http://localhost:5000/cart/get/${userId}`
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch cart"
      );
    }
  }
);


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase (fetchCart.pending ,(state)=>{
            state.loading = true
        })

        .addCase (fetchCart.fulfilled , (state , action)=>{
            state.loading = false
            state.items = action.payload
        })

        .addCase(fetchCart.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default cartSlice.reducer