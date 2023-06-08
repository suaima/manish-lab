const query = {
  status: false,
  message: null,
  data: null,
};

const searchByLocationReducer = (state = query, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_BY_LOCATION_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default searchByLocationReducer;
