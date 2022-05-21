const userServicesDB = require("../services/userServicesDB");
const userServicesJS = require("../services/userServicesJS");
const permissionServices = require("../services/permissionServices");

const initData = () => {
  userServicesDB.deleteAllUsers();
  userServicesJS.deleteAllUsers();
  permissionServices.deleteAllPermissions();
};

const loadAdmin = () => {
  const date = new Date();

  // Users - DB
  const userBL = {
    username: "Admin",
    password: "fullstack",
  };

  userServicesDB.addUser(userBL).then(() => {
    userServicesDB.getAllUsers().then((res) => {
      const users = [...res];
      const adminId = users[0]._id;

      // Users - JSON
      const userJSON = {
        id: adminId,
        firstName: "Ilan",
        lastName: "Samara",
        createDate: date.toISOString().split("T")[0],
        sessionTimeOut: 60,
      };
      userServicesJS.addUser(userJSON);

      // Permissions - JSON
      permission = {
        id: adminId,
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
