const express = require("express");
const userServicesDB = require("../services/userServicesDB");
const userServicesJS = require("../services/userServicesJS");

const router = express.Router();

// Get all users
// - Mongo DB
router.route("/db/").get(async (req, res) => {
  const users = await userServicesDB.getAllUsers();
  return res.json(users);
});

// - JSON file
router.route("/js/").get(async (req, res) => {
  const users = await userServicesJS.getAllUsers();
  return res.json(users);
});

// Get user by Id / Username
// - Mongo DB
router.route("/db/:id").get(async (req, res) => {
  const id = req.params.id;
  const user = await userServicesDB.getUserById(id);
  return res.json(user);
});

router.route("/db/un/:username").get(async (req, res) => {
  const username = req.params.username;
  const user = await userServicesDB.getUserByUsername(username);
  return res.json(user);
});

// JSON file -
router.route("/js/:id").get(async (req, res) => {
  const id = req.params.id;
  const user = await userServicesJS.getUserById(id);
  return res.json(user);
});

// Post
// - Mongo DB
router.route("/db/").post(async (req, res) => {
  const newUser = req.body;
  try {
    const data = await userServicesDB.addUser(newUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// - JSON file
router.route("/js/").post(async (req, res) => {
  const newUser = req.body;
  try {
    const data = await userServicesJS.addUser(newUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
// - Mongo DB
router.route("/db/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeUser = req.body;
  try {
    const data = await userServicesDB.updateUser(id, changeUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// - JSON file
router.route("/js/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeUser = req.body;
  try {
    const data = await userServicesJS.updateUser(id, changeUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
// - Mongo DB
router.route("/db/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await userServicesDB.deleteUser(id);
  return res.json(data);
});

// - JSON file
router.route("/js/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await userServicesJS.deleteUser(id);
  return res.json(data);
});

module.exports = router;
