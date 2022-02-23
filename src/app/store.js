import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import counterReducer from '../features/counter/counterSlice';
import buttonReducer from '../features/button/buttonSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        button: buttonReducer,
    },
})