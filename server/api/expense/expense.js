const express = require("express");
const Expense = require("../../models/expense.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/get-all-expenses", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "dumdumdum");
    const userEmail = decoded.email;
    const expenses = await Expense.find({
      userid: userEmail,
    });
    res.json({ status: "ok", expenses: expenses });
  } catch (err) {
    res.send({
      status: "error",
      error: "Invalid Token",
    });
  }
});

router.post("/save-expense", async (req, res) => {
  const token = req.headers["x-access-token"];
  let decoded;
  try {
    decoded = jwt.verify(token, "dumdumdum");
  } catch (err) {
    res.send({
      status: "error",
      error: "Invalid Token",
    });
  }
  try {
    const userEmail = decoded.email;
    const expense = await Expense.create({
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
module.exports = router;
