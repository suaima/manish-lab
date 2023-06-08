const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RES_VILLA_ID":
      return action.payload;
    default:
      return state;
  }
};
export default reservationReducer;
