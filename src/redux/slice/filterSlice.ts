import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    searchQuery: string;
    category: 'Food' | 'Drinks' | 'Snacks' | 'Sauces';
}

const initialState: FilterState = {
    searchQuery: '',
    category: 'Food',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        setCategory(state, action: PayloadAction< 'Food' | 'Drinks' | 'Snacks' | 'Sauces'>) {
            state.category = action.payload;
        },
        clearSearch(state) {
            state.searchQuery = '';
        },
    },
});

export const { setSearchQuery, setCategory, clearSearch } = filterSlice.actions;
export default filterSlice.reducer;
