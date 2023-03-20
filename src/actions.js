export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';

export const fetchCampaigns = () => {
  return (dispatch) => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_CAMPAIGNS, payload: data }));
  };
};

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  payload: endDate,
});

export const addCampaign = (campaign) => ({
  type: ADD_CAMPAIGN,
  payload: campaign,
});
