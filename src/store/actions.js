// src/store/actions.js

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const ADD_BLOG = 'ADD_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const editBlog = (blog) => ({
  type: EDIT_BLOG,
  payload: blog,
});

export const deleteBlog = (id) => ({
  type: DELETE_BLOG,
  payload: id,
});
