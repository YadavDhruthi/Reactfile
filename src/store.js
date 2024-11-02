import { configureStore, createSlice } from "@reduxjs/toolkit";
import NonVeg from "./NonVeg";
import Veg from "./Veg";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'tomato',price:200.5},
            {name:'potato',price:450.5},
            {name:'carrot',price:257.8}
        ],
        nonveg:[
            {name:'chicken',price:800.6},
            {name:'fish',price:1000.5},
            {name:'mutton',price:2500}
        ],
},
reducers:{}
});

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
      addToCart: (state, action) => {
        const item = state.find(item => item.name === action.payload.name); 
        if (item) {1
          item.quantity += 1; 
        }
         else {
          state.push({ ...action.payload, quantity: 1 }); 
        }
    },
    increment: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
          item.quantity += 1;
      }
  },
  decrement: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 1) {
          item.quantity -= 1;
      } else if (item && item.quantity === 1) {
          // Optionally, remove item when quantity is 0
          return state.filter((item) => item.name !== action.payload.name);
      }
  },
  remove: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
  }
}
})
    
const store = configureStore({
    reducer:
    
         {products:productsSlice.reducer,
         cart:cartSlice.reducer
         }
})

 
export const {addToCart,increment,decrement,remove} = cartSlice.actions;
export default store;
