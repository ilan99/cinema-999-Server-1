const jsonfile = require("jsonfile");
const file = "./files/Users.json";

// Get
const getAllUsers = () => {
  return new Promise((res, rej) => {
    jsonfile.readFile(file, (err, users) => {
      if (err) {
        rej(err);
      } else {
        res(users);
      }
    });
  });
};

const getUserById = (id) => {
  return new Promise((res, rej) => {
    jsonfile.readFile(file, (err, users) => {
      if (err) {
        rej(err);
      } else {
        const user = users.find((user) => user.id === id);
        res(user);
      }
    });
  });
};

// Post
const addUser = (newUser) => {
  return new Promise((res, rej) => {
    getAllUsers().then((users) => {
      users.push(newUser);
      jsonfile.writeFile(file, users, (err) => {
        if (err) {
          rej(err);
        } else {
          res("user added successfully");
        }
      });
    });
  });
};

// Put
const updateUser = (id, changeUser) => {
  return new Promise((res, rej) => {
    getAllUsers().then((users) => {
      const index = users.findIndex((user) => user.id === id);
      users[index] = changeUser;
      jsonfile.writeFile(file, users, (err) => {
        if (err) {
          rej(err);
        } else {
          res("user updated successfully");
        }
      });
    });
  });
};

// Delete
const deleteUser = (id) => {
  return new Promise((res, rej) => {
    getAllUsers().then((users) => {
      users = users.filter((user) => user.id !== id);
      jsonfile.writeFile(file, users, (err) => {
        if (err) {
          rej(err);
        } else {
          res("user deleted successfully");
        }
      });
    });
  });
};

const deleteAllUsers = () => {
  return new Promise((res, rej) => {
    jsonfile.writeFile(file, [], (err) => {
      if (err) {
        rej(err);
      } else {
        res("all users deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
