export const API_URL = `${process.env.REACT_APP_URL}/api`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersGenresUrl = (string: string) => `/users${string}`;
export const getMoviesUrl = (string: string) => `/movies${string}`;
export const getGenresUrl = (string: string) => `/genres${string}`;
export const getActorsUrl = (string: string) => `/actors${string}`;
export const getRatingsActorsUrl = (string: string) => `/ratings${string}`;