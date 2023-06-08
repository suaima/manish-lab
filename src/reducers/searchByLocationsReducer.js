const query = {
  status: false,
  message: null,
  data: null,
};

const searchByLocationsReducer = (state = query, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_BY_LOCATIONS_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default searchByLocationsReducer;
