import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { FoodItem } from './menuSlice';
import { loadState, saveState } from '../localStorage';

interface CartItem extends FoodItem{
    quantity: number;
}

export type CartState =   {
    items: CartItem[];
    totalPrice: number
}

const initialState: CartState = loadState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<FoodItem>) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            saveState(state);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveState(state);
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity++;
            }
            saveState(state);
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            }
            saveState(state);
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer;