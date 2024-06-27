export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
