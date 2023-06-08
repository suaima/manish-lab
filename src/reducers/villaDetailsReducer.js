const villaDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_VILLA_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default villaDetailsReducer;