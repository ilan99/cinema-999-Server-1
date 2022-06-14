const userServices = require("../services/userServices");
const permissionServices = require("../services/permissionServices");

const initData = () => {
  userServices.deleteAllUsers();
  permissionServices.deleteAllPermissions();
};

const loadAdmin = () => {
  const date = new Date();

  // Users
  const userBL = {
    username: "Admin",
    password: "fullstack",
    firstName: "Ilan",
    lastName: "Samara",
    createDate: date.toISOString().split("T")[0],
    sessionTimeOut: 60,
  };

  userServices.addUser(userBL).then(() => {
    userServices.getAllUsers().then((res) => {
      const users = [...res];
      const adminId = users[0]._id;

      // Permissions
      permission = {
        userId: adminId,
        permissions: [
          "View Subscriptions",
          "Create Subscriptions",
          "Delete Subscriptions",
          "Update Subscriptions",
          "View Movies",
          "Create Movies",
          "Delete Movies",
          "Update Movies",
        ],
      };
      permissionServices.addPermission(permission);
    });
  });
};

module.exports = { initData, loadAdmin };
