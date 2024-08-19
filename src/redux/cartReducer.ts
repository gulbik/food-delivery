import { loadState, saveState } from './localStorage';
import { FoodItem } from './slice/menuSlice';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export interface CartItem extends FoodItem {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = loadState();

const calculateTotalPrice = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state = initialState, action: any) => {
    let updatedItems;

    switch (action.type) {
        case ADD_TO_CART: {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                updatedItems = state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
            }
            const totalPrice = calculateTotalPrice(updatedItems);
            const newState = { ...state, items: updatedItems, totalPrice };
            saveState(newState);
            return newState;
        }
        case REMOVE_FROM_CART: {
            updatedItems = state.items.filter(item => item.id !== action.payload);
            const totalPrice = calculateTotalPrice(updatedItems);
            const newState = { ...state, items: updatedItems, totalPrice };
            saveState(newState);
            return newState;
        }
        case INCREASE_QUANTITY: {
            updatedItems = state.items.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            const totalPrice = calculateTotalPrice(updatedItems);
            const newState = { ...state, items: updatedItems, totalPrice };
            saveState(newState);
            return newState;
        }
        case DECREASE_QUANTITY: {
            updatedItems = state.items.map(item =>
                item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
            const totalPrice = calculateTotalPrice(updatedItems);
            const newState = { ...state, items: updatedItems, totalPrice };
            saveState(newState);
            return newState;
        }
        default:
            return state;
    }
};

export default cartReducer;
