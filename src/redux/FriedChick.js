import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { pizzaSlice } from "./PizzaReducer";
import { getFromLocalStorage, saveToLocalStorage } from "./utlis";



export const friedChickSlice = createSlice({
    name: "friedChick",
    initialState: {
        friedChicks: [],
        friedChick: [],

        loading: false,
    count: 1, 

    basket2: getFromLocalStorage("basket2"),
    },
    reducers: {
        get: (state, action) => {
            
            state.friedChicks = action.payload
        },
 getId: (state, action) => {
            state.friedChick = action.payload;
          },    
          setLoading: (state, action) => {
            state.loading = action.payload;
          },
          handleSave: (state, action) => {
            for (let i = 0; i < state.basket2.length; i++) {
              if (state.basket2[i].id === action.payload.id) {
                return;
              }
            }
            state.basket2.push({ ...action.payload, count: state.count });
            saveToLocalStorage("basket2", state.basket2);
          },
          setCount: (state, action) => {
                state.basket2[action.payload].count += 1
              saveToLocalStorage("basket2", state.basket2)
      
          },
          setCount2: (state, action) => {
      
      
            if (state.basket2[action.payload].count <= 1) {
                      return
                  } else {
                      state.basket2[action.payload].count -= 1
                  }
                  saveToLocalStorage("basket2", state.basket2)
      
          },
      
          delProduct: (state, action) => {
            let items = JSON.parse(localStorage.getItem("basket2"));
            items = state.basket2.filter((item) => item.id !== action.payload);
            saveToLocalStorage("basket2", items);
            if (items.length === 0) {
              localStorage.removeItem("basket2");
            }
          },
    }
}) 



let getFriedChicks=()=>createAction("API/call")({
    url: "/fried-chicken",
    method: "GET",
    onSuccess: friedChickSlice.actions.get().type
})

let getFriedChick = (id) =>
  createAction("API/call")({
    url: `/fried-chicken/${id}`,
    method: "GET",
    onSuccess: friedChickSlice.actions.getId().type,
  });
let Loading = (load) =>
  createAction("API/call")({
    onSuccess: friedChickSlice.actions.setLoading().type,
  });



export const actions = {...friedChickSlice.actions, getFriedChicks, getFriedChick, Loading}  