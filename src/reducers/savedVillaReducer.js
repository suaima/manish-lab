const query = {};

const savedVillaReducer = (state = query, action) => {
  switch (action.type) {
    case "SAVED_VILLA":
      return action.payload;
    default:
      return state;
  }
};

export default savedVillaReducer;
