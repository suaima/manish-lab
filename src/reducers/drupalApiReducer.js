export const getToken = (state = null, action) => {
  switch (action.type) {
    case "GET_DRUPAL_TOKEN":
      return action.payload;
    default:
      return state;
  }
};

export const getHashId = (state = null, action) => {
  switch (action.type) {
    case "GET_HASH_ID":
      return action.payload;
    default:
      return state;
  }
};

export const getBookingDetails = (state = {}, action) => {
  switch (action.type) {
    case "GET_DRUPAL_BOOKING_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
