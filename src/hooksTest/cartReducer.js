export let cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      let index = state.findIndex((item) => item.id === action.product.id);
      if (index != -1) {
        state[index].quantity += 1;
        return [...state];
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    default:
      return state;
  }
};

