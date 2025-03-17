import {configureStore} from '@reduxjs/toolkit';
import Todo from '../features/Todo'
export const store = configureStore({
    reducer:{
        Todo: Todo
    }
})