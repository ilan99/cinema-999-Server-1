const express = require("express");
const userServices = require("../services/userServices");

const router = express.Router();

// Get all users
router.route("/").get(async (req, res) => {
  console.log("=> Users request");
  const users = await userServices.getAllUsers();
  return res.json(users);
});

// Get user by Id / Username
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const user = await userServices.getUserById(id);
  return res.json(user);
});

router.route("/un/:username").get(async (req, res) => {
  const username = req.params.username;
  const user = await userServices.getUserByUsername(username);
  return res.json(user);
});

// Post
router.route("/").post(async (req, res) => {
  const newUser = req.body;
  try {
    const data = await userServices.addUser(newUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeUser = req.body;
  try {
    const data = await userServices.updateUser(id, changeUser);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await userServices.deleteUser(id);
  return res.json(data);
});

module.exports = router;
