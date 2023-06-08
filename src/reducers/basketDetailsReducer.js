const basketDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BASKET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default basketDetailsReducer;
