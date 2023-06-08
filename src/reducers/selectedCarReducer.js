const selectedCarReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_CAR":
      return action.payload;
    default:
      return state;
  }
};

export default selectedCarReducer;
