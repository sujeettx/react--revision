import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk('fetchTodo',async()=>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await responce.json();
})

const todoSlice = createSlice({
    name:"Todo",
    initialState:{
        isLoding:false,
        isError: false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoding = true; 
        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isError = true;
            console.log('Error', action.payload); 
        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoding = false;
            state.data = action.payload
        })
    }
    
})

export default todoSlice.reducer