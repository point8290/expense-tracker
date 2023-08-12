const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");
const Expense = require("./models/expense.model");
const bcrypt = require("bcryptjs");
const userRoutes = require("./api/user/user");
const expenseRoutes = require("./api/expense/expense");
require("dotenv").config();
const app = express();

// ****************** Middle Wares ******************

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ****************** DB Connection ***************************
mongoose.connect("mongodb://127.0.0.1:27017/expense-tracker");
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

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
