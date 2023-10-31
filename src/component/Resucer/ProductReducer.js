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
    case "Loading":
      return {
        ...state,
        sigleLoading: true,
      };
    case "sigle_product_api":
      return {
        ...state,
        sigleLoading: false,
        singleproduct: action.payload,
      };
    case "error":
      return {
        ...state,
        sigleError: true,
      };
    case "set_grid":
      return {
        ...state,
        grid: true,
      };
    case "set_list":
      return {
        ...state,
        grid: false,
      };

    default:
      return state;
  }
};

export default reducer;
