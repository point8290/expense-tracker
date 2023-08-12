const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");
const Expense = require("./models/expense.model");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get("/api/get-all-expenses", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "dumdumdum");
    const userEmail = decoded.email;
    const expenses = await Expense.find({
      userid: userEmail,
    });
    console.log("Expesnes", expenses);
    res.json({ status: "ok", expenses: expenses });
  } catch (err) {
    res.send({
      status: "error",
      error: "Invalid Token",
    });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    if (req.body.confirmPassword != req.body.password) {
      res.send({
        status: "error",
        error: "Password do not match",
      });
    }
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.send({
      status: "error",
      error: err,
    });
  }
});
app.post("/api/save-expense", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "dumdumdum");
    const userEmail = decoded.email;
    const user = await Expense.create({
      title: req.body.title,
      content: req.body.content,
      date: req.body.date,
      amount: req.body.amount,
      userid: userEmail,
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.send({
      status: "error",
      error: err,
    });
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      res.send({
        status: "error",
        user: false,
        error: "Invalid Login",
      });
    } else {
      const isPasswordValid = bcrypt.compare(req.body.password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
          },
          "dumdumdum"
        );
        res.json({ status: "ok", user: token });
      } else {
        res.send({
          status: "error",
          user: false,
          error: "Incorrect Password",
        });
      }
    }
  } catch (err) {
    res.send({
      status: "error",
      error: err,
      user: false,
    });
  }
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
