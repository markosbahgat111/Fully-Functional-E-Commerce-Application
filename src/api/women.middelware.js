
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const category = "women's clothing";

const fetchWomenProducts = createAsyncThunk(
    'products/fetchWomenProducts',
    async (_, {rejectWithValue}) =>
    {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          return await res.data
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
  )


export default fetchWomenProducts;
