const Permission = require("../models/permissionModel");

// Get
const getAllPermissions = () => {
  return new Promise((res, rej) => {
    Permission.find({}, (err, permissions) => {
      if (err) {
        rej(err);
      } else {
        res(permissions);
      }
    });
  });
};

const getPermissionById = (id) => {
  return new Promise((res, rej) => {
    Permission.find({ userId: id }, (err, permissions) => {
      if (err) {
        rej(err);
      } else {
        res(permissions[0].permissions);
      }
    });
  });
};

// Post
const addPermission = (newPermission) => {
  return new Promise((res, rej) => {
    const permission = new Permission(newPermission);
    permission.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("permission added successfully");
      }
    });
  });
};

// Put
const updatePermission = (id, changePermission) => {
  return new Promise((res, rej) => {
    Permission.findOneAndUpdate(
      { userId: id },
      { permissions: changePermission.permissions },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("permissions updated successfully");
        }
      }
    );
  });
};

// Delete
const deletePermission = (id) => {
  return new Promise((res, rej) => {
    Permission.findOneAndDelete({ userId: id }, (err) => {
      if (err) {
        rej(err);
      } else {
        res("permission deleted successfully");
      }
    });
  });
};

const deleteAllPermissions = () => {
  return new Promise((res, rej) => {
    Permission.deleteMany({}, (err) => {
      if (err) {
        rej(err);
      } else {
        res("all permissions deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllPermissions,
  getPermissionById,
  addPermission,
  updatePermission,
  deletePermission,
  deleteAllPermissions,
};
