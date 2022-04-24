import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, {rejectWithValue}) =>
    {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
          return await res.data
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
  )


export default fetchProducts;
