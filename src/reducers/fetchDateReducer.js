const fetchDateReducer = (state = { data: null, status: false }, action) => {
  switch (action.type) {
    case "FETCH_DATE_API":
      return { data: action.payload, status: true };
    default:
      return state;
  }
};
export default fetchDateReducer;
