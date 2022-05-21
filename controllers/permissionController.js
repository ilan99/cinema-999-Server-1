const express = require("express");
const permissionServices = require("../services/permissionServices");

const router = express.Router();

// Get all permission
router.route("/").get(async (req, res) => {
  const permissions = await permissionServices.getAllPermissions();
  return res.json(permissions);
});

// Get permission by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const permission = await permissionServices.getPermissionById(id);
  return res.json(permission);
});

// Post
router.route("/").post(async (req, res) => {
  const newPermission = req.body;
  try {
    const data = await permissionServices.addPermission(newPermission);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changePermission = req.body;
  try {
    const data = await permissionServices.updatePermission(
      id,
      changePermission
    );
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await permissionServices.deletePermission(id);
  return res.json(data);
});

module.exports = router;
