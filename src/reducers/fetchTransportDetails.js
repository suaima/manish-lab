const fetchTransportDetails = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TRANSPORT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default fetchTransportDetails;
