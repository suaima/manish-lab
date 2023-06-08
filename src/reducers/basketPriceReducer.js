const basketPriceReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BASKET_PRICE":
      return action.payload;
    default:
      return state;
  }
};

export default basketPriceReducer;
