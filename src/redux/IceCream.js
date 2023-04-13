import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getFromLocalStorage, saveToLocalStorage } from "./utlis";



export const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState: {
        iceCreams: [],
        iceCream: [],
        loading: false,
    count: 1, 

    basket2: getFromLocalStorage("basket2"),
    },
    reducers: {
        get: (state, action) => {
            
            state.iceCreams = action.payload
        },
 getId: (state, action) => {
            state.iceCream = action.payload;
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




let getIceCreams=()=>createAction("API/call")({
    url: "/ice-cream",
    method: "GET",
    onSuccess: iceCreamSlice.actions.get().type
})

let getIceCream = (id) =>
  createAction("API/call")({
    url: `/ice-cream/${id}`,
    method: "GET",
    onSuccess: iceCreamSlice.actions.getId().type,
  });
let Loading = (load) =>
  createAction("API/call")({
    onSuccess: iceCreamSlice.actions.setLoading().type,
  });



export const actions = {...iceCreamSlice.actions, getIceCreams, getIceCream, Loading}  