import { createAction, createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "./utlis";



export const pizzaSlice = createSlice({
    name: "pizzas",
    initialState: {
        pizzas: [],
        pizza: [],
        user: [],
        currentItem: "",
        loading: false,
    count: 1, 

    basket2: getFromLocalStorage("basket2"),
    },
    reducers: {
        get: (state, action) => {
            state.pizzas = action.payload
        },
        getUser: (state, action) => {
          state.user = action.payload
        },

        // toggle: (state, action) => {
        //     state.visible = !state.visible
        // },
        getId: (state, action) => {
            state.pizza = action.payload;
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
          edit: (state, action) => {
            for (const element of state[0]) {
              let idx = element.findIndex((user) => user.id === action.payload.id);

              if (idx >= 0) {
                  element[idx] = action.payload;
              }
          };
        },
        add: (state, action) => {
          
        },
        delete: (state, action) => {
          state.user.delete(action.payload)
      }
    }
}) 



let getPizzas=()=>createAction("API/call")({
    url: "/pizzas",
    method: "GET",
    onSuccess: pizzaSlice.actions.get().type
})
let getUsers=()=>createAction("API/call")({
  url: "/users",
  method: "GET",
  onSuccess: pizzaSlice.actions.getUser().type
})

let getPizza = (id) =>
  createAction("API/call")({
    url: `/pizzas/${id}`,
    method: "GET",
    onSuccess: pizzaSlice.actions.getId().type,
  });
let Loading = (load) =>
  createAction("API/call")({
    onSuccess: pizzaSlice.actions.setLoading().type,
  });
let edPosts=(data)=>createAction("API/call")({
    
    url: "/users/" + data.id,
    method: "PUT",  
    data,
    onSuccess: pizzaSlice.actions.edit().type
})
let addPosts=(data)=>createAction("API/call")({
  url: "/users",
  method: "POST",
  data,
  onSuccess: pizzaSlice.actions.add().type
})
let delPosts=(id)=>createAction("API/call")({
  url: "/users/" + id,
  method: "DELETE",
  onSuccess: pizzaSlice.actions.delete().type
})

// let toggle = () => createAction("API/call")({
//     onSuccess: pizzaSlice.actions.toggle().type
// })




  export const actions = {...pizzaSlice.actions, getPizzas, getPizza, Loading, getUsers, edPosts, addPosts, delPosts}  