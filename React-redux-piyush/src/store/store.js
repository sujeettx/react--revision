import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter';
import todoReducer from '../features/todo';
export const store = configureStore({
    reducer: {
        // Reducers
        counter: counterReducer,
        todo: todoReducer
    }
})
export default store;