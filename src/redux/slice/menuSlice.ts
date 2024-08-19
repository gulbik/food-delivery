import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface FoodItem {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
}

export interface MenuState {
    items: FoodItem[];
    status: 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MenuState = {
    items: [],
    status: 'loading',
    error: null,
};

export const fetchMenu = createAsyncThunk<FoodItem[]>('menu/fetchMenu', async () => {
    const response = await axios.get('http://localhost:3001/food');
    return response.data as FoodItem[];
});

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Error with fetching menu';
            });
    },
});

export default menuSlice.reducer;
