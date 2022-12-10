const axios = require("axios");
// const url = "http://localhost:8001/subscriptions";
const url = "http://subscriptions-999.up.railway.app/subscriptions";

// Get
const getAllSubscriptions = () => {
  return axios.get(url);
};

const getAllSubscriptionsByRef = () => {
  return axios.get(`${url}/ref`);
};

const getSubscriptionById = (id) => {
  return axios.get(`${url}/${id}`);
};

// Post
const addSubscription = (newSubscription) => {
  return axios.post(url, newSubscription);
};

// Put
const updateSubscription = (id, changeSubscription) => {
  return axios.put(`${url}/${id}`, changeSubscription);
};

// Delete
const deleteSubscription = (id) => {
  return axios.delete(`${url}/${id}`);
};

module.exports = {
  getAllSubscriptions,
  getAllSubscriptionsByRef,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};
