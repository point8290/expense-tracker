const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./api/user/user");
const expenseRoutes = require("./api/expense/expense");
require("dotenv").config();
const app = express();

// ****************** Middle Wares ******************

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ****************** DB Connection ***************************
mongoose.connect(process.env.DB_CONNECTION_STRING);
const db = mongoose.connection;
db.once("open", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MongoDB");
  }
});

db.on("error", (error) => {
  if (error) {
    console.log(error);
  }
});

app.use("/api/user", userRoutes);
app.use("/api/expense", expenseRoutes);

const PORT = process.env.PORT || 6010;
app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
