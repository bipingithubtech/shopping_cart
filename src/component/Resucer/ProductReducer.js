const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "API_DATA":
      const categoriesdata = action.payload.filter((element) => {
        return element.featured === true;
      });
      return {
        ...state,
        loading: false,
        store: action.payload,
        categoriesProducts: categoriesdata,
      };
    case "error":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
