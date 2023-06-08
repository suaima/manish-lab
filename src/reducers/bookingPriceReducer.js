const initialState = {
    villa_price: 0,
    extra_price: 0,
    transport_price: 0,
    carHire_price: 0
};

export const selectedItemPrice = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_VILLA_PRICE":
      return {...state,villa_price: action.payload}
    case "SELECTED_EXTRA_PRICE":
      return {...state,extra_price: action.payload}
    case "SELECTED_TRANSPORT_PRICE":
      return {...state,transport_price: action.payload}
    case "SELECTED_CARHIRE_PRICE":
      return {...state,carHire_price:  action.payload}
    default:
      return state;
  }
};
