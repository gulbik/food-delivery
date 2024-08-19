import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
    address: string;
}

interface AuthState {
    user: User| null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }: { username: string; password: string }, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:3001/users`, {
                params: { username },
            });
            if (response.data.length > 0 && response.data[0].password==password) {
                return response.data[0];
                
            } else {
                return thunkAPI.rejectWithValue('Invalid username or password');
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue('An error occurred');
        }
    }
);

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async(userData: {username: string, password: string, name: string, phone: string, address: string}, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://localhost:3001/users', userData);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response.data)  
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(signupUser.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
