import { combineReducers } from "redux";
import elasticSearchReducer from "./elasticSearchReducer";
import elasticFacetsReducer from "./elasticFacetsReducer";
import reservationReducer from "./reservationReducer";
import fetchExtrasDetails from "./fetchExtrasDetails";
import fetchTransportDetails from "./fetchTransportDetails";
import { getToken, getHashId, getBookingDetails } from "./drupalApiReducer";
import fetchDateReducer from "./fetchDateReducer";
import fetchQueryReducer from "./fetchedQueryReducer";
import searchbarReducer from "./queryParamsReducer";
import placeholderReducer from "./placeholderReducer";
import bookingQuoteReducer from "./bookingQuoteReducer";
import searchByLocationReducer from "./searchByLocationReducer";
import searchByLocationsReducer from "./searchByLocationsReducer";
import villaDetailsReducer from "./villaDetailsReducer";
import carHireReducer from "./carHireReducer";
import selectedCarReducer from "./selectedCarReducer";
import { selectedItemPrice } from "./bookingPriceReducer";
import noDatesReducer from "./noDatesReducer";
import resetDatesReducer from "./resetDatesReducer";
import basketDetailsReducer from "./basketDetailsReducer";
import basketPriceReducer from "./basketPriceReducer";
import selectedDuration from "./selectedDuration";
import savedVillaReducer from "./savedVillaReducer";

export default combineReducers({
  elasticData: elasticSearchReducer,
  elasticFacetsData: elasticFacetsReducer,
  reservationData: reservationReducer,
  fetchExtrasDetails: fetchExtrasDetails,
  fetchTransportDetails: fetchTransportDetails,
  getToken: getToken,
  getHashId: getHashId,
  getBookingDetails: getBookingDetails,
  fetchedQueryParams: fetchQueryReducer,
  dateCaraouselDetails: fetchDateReducer,
  searchbarParams: searchbarReducer,
  placeholder: placeholderReducer,
  bookingQuoteId: bookingQuoteReducer,
  basketDetails: basketDetailsReducer,
  basketPrice: basketPriceReducer,
  searchByLocation: searchByLocationReducer,
  searchByLocations: searchByLocationsReducer,
  villaDetails: villaDetailsReducer,
  carHireData: carHireReducer,
  selectedCar: selectedCarReducer,
  itemPrice: selectedItemPrice,
  noDates: noDatesReducer,
  resetDates: resetDatesReducer,
  selectedDuration: selectedDuration,
  savedVilla: savedVillaReducer,
});
