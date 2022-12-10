const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const dbSetup = require("./custom_modules/dbSetup");
const userController = require("./controllers/userController");
const permissionController = require("./controllers/permissionController");
const memberController = require("./controllers/memberController");
const movieController = require("./controllers/movieController");
const subscriptionController = require("./controllers/subscriptionController");

const app = express();
const port = 8000;
const host = "0.0.0.0";

connectDB();

// Init database
// dbSetup.initData();
// dbSetup.loadAdmin();

app.use(cors());

app.use(express.json());

// Users WS
app.use("/users", userController);
app.use("/permissions", permissionController);

// Subscription WS
app.use("/members", memberController);
app.use("/movies", movieController);
app.use("/subscriptions", subscriptionController);

app.listen(process.env.PORT || port, host, () =>
  console.log("Cinema server is on ...")
);
