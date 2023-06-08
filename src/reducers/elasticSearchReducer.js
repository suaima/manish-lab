const elasticSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ELASTIC_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default elasticSearchReducer;
