import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './cartReducer';
import { FoodItem } from './slice/menuSlice';

export const addToCart = (item: FoodItem) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = (id: string) => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const increaseQuantity = (id: string) => ({
    type: INCREASE_QUANTITY,
    payload: id
});

export const decreaseQuantity = (id: string) => ({
    type: DECREASE_QUANTITY,
    payload: id
});
