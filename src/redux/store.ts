import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slice/menuSlice';
//import cartReducer  from './slice/cartSlice';
import cartReducer from './cartReducer';
import filterReducer from './slice/filterSlice';
import authReducer from './slice/authSlice';
import { saveState } from './localStorage';



const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        filter: filterReducer,
        auth: authReducer
    },
});

store.subscribe(() => {
    saveState(store.getState().cart)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
