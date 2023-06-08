const bookingQuoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BOOKING_ID":
      return action.payload;
    default:
      return state;
  }
};
export default bookingQuoteReducer;
