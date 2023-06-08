const query = {};

const carHireReducer = (state = query, action) => {
  switch (action.type) {
    case "CAR_HIRE_API":
      return action.payload;
    default:
      return state;
  }
};

export default carHireReducer;
