const query = {
  status: false,
  message: null,
  data: null,
};

const elasticFacetsReducer = (state = query, action) => {
  switch (action.type) {
    case "FETCH_FACETS_ELASTIC_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default elasticFacetsReducer;
