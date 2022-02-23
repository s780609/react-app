import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
    name: "button",
    initialState: {
        text: "hello world",
    },
    reducers: {
        textChange: (state) => {
            if (state.text == "hello world") {
                state.text = "hello taiwan";
            }
            else if (state.text == "hello taiwan") {
                state.text = "hello world";
            }
            else {
                state.text = "hello world";
            }
        },
    }
});

// Action creators are generated for each case reducer function
export const { textChange } = buttonSlice.actions

export default buttonSlice.reducer