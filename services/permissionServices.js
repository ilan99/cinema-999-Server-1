const jsonfile = require("jsonfile");
const file = "./files/Permissions.json";

// Get
const getAllPermissions = () => {
  return new Promise((res, rej) => {
    jsonfile.readFile(file, (err, permissions) => {
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
    jsonfile.readFile(file, (err, permissions) => {
      if (err) {
        rej(err);
      } else {
        const permission = permissions.find(
          (permission) => permission.id === id
        );
        res(permission);
      }
    });
  });
};

// Post
const addPermission = (newPermission) => {
  return new Promise((res, rej) => {
    getAllPermissions().then((permissions) => {
      permissions.push(newPermission);
      jsonfile.writeFile(file, permissions, (err) => {
        if (err) {
          rej(err);
        } else {
          res("permission added successfully");
        }
      });
    });
  });
};

// Put
const updatePermission = (id, changePermission) => {
  return new Promise((res, rej) => {
    getAllPermissions().then((permissions) => {
      const index = permissions.findIndex((permission) => permission.id === id);
      permissions[index] = changePermission;
      jsonfile.writeFile(file, permissions, (err) => {
        if (err) {
          rej(err);
        } else {
          res("permission updated successfully");
        }
      });
    });
  });
};

// Delete
const deletePermission = (id) => {
  return new Promise((res, rej) => {
    getAllPermissions().then((permissions) => {
      permissions = permissions.filter((permission) => permission.id !== id);
      jsonfile.writeFile(file, permissions, (err) => {
        if (err) {
          rej(err);
        } else {
          res("permission deleted successfully");
        }
      });
    });
  });
};

const deleteAllPermissions = () => {
  return new Promise((res, rej) => {
    jsonfile.writeFile(file, [], (err) => {
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
