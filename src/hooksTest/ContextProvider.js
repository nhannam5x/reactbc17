import React, { useReducer } from "react";
export const storeContext = React.createContext();
let initialCart = [];
let cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      let index = state.findIndex((item) => item.id === action.item.id);
      if (index != -1) {
        state[index].quantity += 1;
        return [...state];
      }
      return [...state, { ...action.item, quantity: 1 }];
    }
    default:
      return state;
  }
};
export default function Context(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);
  //Có thể kết hợp useState hoặc useReducer
  const store = {
    cartReducer: [cart, dispatch], //Tạo ra store giống như rootReducer
  };
  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  );
}
