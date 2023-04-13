import { combineReducers, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postSlice } from "./BurgerReducer";
import { DessertSlice } from "./Dessert";
import { DrinkSlice } from "./Drinks";
import { friedChickSlice } from "./FriedChick";
import { iceCreamSlice } from "./IceCream";
import { pizzaSlice } from "./PizzaReducer";

const api=({dispatch})=>(next)=>(action)=>{
    if (action.type !== "API/call") {
        return next(action)
    }
    next(action)
    const {url, method, data, onSuccess} = action.payload
        
                axios({
                    baseURL: "https://fakebackburgers.onrender.com",
                    url,
                    method,
                    data
                }).then(res => {  
                    dispatch({
                        type: onSuccess,
                        payload: res.data,
                        
                    })
                }).catch(err => {
                    dispatch({
                     type: postSlice.actions.error().type,
                     payload: err.message   
                    })
                })
            }
export const store = configureStore({
    reducer: {
        postReducer: postSlice.reducer,
        pizzaReducer: pizzaSlice.reducer,
        friedChickReducer: friedChickSlice.reducer,
        iceCreamReducer: iceCreamSlice.reducer,
        dessertReducer: DessertSlice.reducer,
        drinkReducer: DrinkSlice.reducer
    }, 
    middleware: [api]
})