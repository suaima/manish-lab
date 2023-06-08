const fetchQueryReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_QUERY_PARAMS":
      return action.payload;
    default:
      return state;
  }
};
export default fetchQueryReducer;
