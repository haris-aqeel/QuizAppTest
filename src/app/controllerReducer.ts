import {createSlice} from '@reduxjs/toolkit';


const controllerReducer = createSlice({
    name: 'ScoreCounter',
    initialState: 0,
    reducers: {
        increment: state => {
             state = state + 1
        },
        decrement: state => {
             state = state - 1
        },
        clear: state => {
             state = state
        } 
    }
})


export const {increment, decrement, clear} = controllerReducer.actions;

export default controllerReducer.reducer;