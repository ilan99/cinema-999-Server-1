const axios = require("axios");
// const url = "http://localhost:8001/movies";
const url = "http://subscriptions-rg3l.onrender.com/movies";

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
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
