import { CartState } from "./slice/cartSlice";

export const loadState = (): CartState => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : { items: [], totalPrice: 0 };
    } catch (e) {
        return { items: [], totalPrice: 0 };
    }
};

export const saveState = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.log("Could not save state in LocalStorage")
    }
};

// export const loadState = <T>(key: string): T | undefined => {
//     try {
//         const serializedState = localStorage.getItem(key);
//         if (serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState) as T;
//     } catch (err) {
//         console.error("Could not load state", err);
//         return undefined;
//     }
// };

// export const saveState = <T>(key: string, state: T): void => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem(key, serializedState);
//     } catch (err) {
//         console.error("Could not save state", err);
//     }
// };

