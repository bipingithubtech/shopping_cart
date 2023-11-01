const reducer = (state, action) => {
  if (action.type === "ADD_CART") {
    let { id, product, color, amount } = action.payload;
    let CartComponent;
    CartComponent = {
      id: id + color,
      name: product.name,
      amount,
      color,
      price: product.price,
      image: product.image[0].url,
      max: product.stock,
    };
    return {
      ...state,
      addCart: [...state.addCart, CartComponent],
    };
  }
  return state;
};
export default reducer;
