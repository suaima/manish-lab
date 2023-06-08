const fetchExtrasDetails = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_EXTRAS_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default fetchExtrasDetails;
