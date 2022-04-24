
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const category = "men's clothing";

const fetchMenProducts = createAsyncThunk(
    'products/fetchMenProducts',
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


export default fetchMenProducts;
