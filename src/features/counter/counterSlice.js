import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
});

function fetchCount(amount = 1) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ value: amount }), 500)
    );
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount = 1) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.value;
    }
);

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer