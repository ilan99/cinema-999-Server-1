const axios = require("axios");
// const url = "http://localhost:8001/movies";
const url = "https://subscriptions-999.cyclic.app/movies";

// Initial request
const initialRequest = () => {
  axios.get(`${url}/start`);
};

// Get
const getAllMovies = () => {
  return axios.get(url);
};

const getMovieById = (id) => {
  return axios.get(`${url}/${id}`);
};

// Post
const addMovie = (newMovie) => {
  return axios.post(url, newMovie);
};

// Put
const updateMovie = (id, changeMovie) => {
  return axios.put(`${url}/${id}`, changeMovie);
};

// Delete
const deleteMovie = (id) => {
  return axios.delete(`${url}/${id}`);
};

module.exports = {
  initialRequest,
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
