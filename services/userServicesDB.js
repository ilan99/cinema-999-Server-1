const User = require("../models/userModel");

// Get
const getAllUsers = () => {
  return new Promise((res, rej) => {
    User.find({}, (err, users) => {
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
    User.findById(id, (err, user) => {
      if (err) {
        rej(err);
      } else {
        res(user);
      }
    });
  });
};

const getUserByUsername = (username) => {
  return new Promise((res, rej) => {
    User.findOne({ username }, (err, users) => {
      if (err) {
        rej(err);
      } else {
        res(users);
      }
    });
  });
};

// Post
const addUser = (newUser) => {
  return new Promise((res, rej) => {
    const user = new User(newUser);
    user.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("user added successfully");
      }
    });
  });
};

// Put
const updateUser = (id, changeUser) => {
  return new Promise((res, rej) => {
    User.findByIdAndUpdate(id, changeUser, { runValidators: true }, (err) => {
      if (err) {
        rej(err);
      } else {
        res("user updated successfully");
      }
    });
  });
};

// Delete
const deleteUser = (id) => {
  return new Promise((res, rej) => {
    User.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("user deleted successfully");
      }
    });
  });
};

const deleteAllUsers = () => {
  return new Promise((res, rej) => {
    User.deleteMany({}, (err) => {
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
  getUserByUsername,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
