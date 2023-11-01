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
  if (action.type === "remove_item") {
    let updateArr = state.addCart.filter((currenElm) => {
      return currenElm.id !== action.payload;
    });

    return {
      ...state,
      addCart: updateArr,
    };
  }
  return state;
};
export default reducer;
