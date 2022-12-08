const axios = require("axios");
// const url = "http://localhost:8001/members";
const url = "http://subscriptions-rg3l.onrender.com/members";

// Get
const getAllMembers = () => {
  return axios.get(url);
};

const getMemberById = (id) => {
  return axios.get(`${url}/${id}`);
};

// Post
const addMember = (newMember) => {
  return axios.post(url, newMember);
};

// Put
const updateMember = (id, changeMember) => {
  return axios.put(`${url}/${id}`, changeMember);
};

// Delete
const deleteMember = (id) => {
  return axios.delete(`${url}/${id}`);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
