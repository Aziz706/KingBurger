import { createAction, createSlice } from "@reduxjs/toolkit";


import { getFromLocalStorage, saveToLocalStorage } from "./utlis";


export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: [],
    visible: false,
    currentItem: "",
    loading: false,
    count: 1, 
    basket2: getFromLocalStorage("basket2")
  },
  reducers: {
    get: (state, action) => {
      state.posts = action.payload;
    },
    getId: (state, action) => {
      state.post = action.payload;
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
    }
  },

});


let getPosts = () =>
  createAction("API/call")({
    url: "/burgers",
    method: "GET",
    onSuccess: postSlice.actions.get().type,
  });

let getPost = (id) =>
  createAction("API/call")({
    url: `/burgers/${id}`,
    method: "GET",
    onSuccess: postSlice.actions.getId().type,
  });
let Loading = () =>
  createAction("API/call")({
    onSuccess: postSlice.actions.setLoading().type,
  });

export const actions = {
  ...postSlice.actions,
  getPosts,
  getPost,
  Loading
};
