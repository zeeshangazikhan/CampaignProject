import {
  SET_SEARCH_TERM,
  SET_START_DATE,
  SET_END_DATE,
  FETCH_CAMPAIGNS,
  ADD_CAMPAIGN,
} from './actions';

const initialState = {
  campaigns: [],
  searchTerm: '',
  startDate: null,
  endDate: null,
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case ADD_CAMPAIGN:
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
      };
    default:
      return state;
  }
};

export default campaignReducer;
