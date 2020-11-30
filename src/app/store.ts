import {configureStore} from '@reduxjs/toolkit';
import controllerReducer from './controllerReducer'

const store = configureStore({
    reducer: controllerReducer
})

export default store;