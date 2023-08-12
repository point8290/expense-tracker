const mongoose = require("mongoose");

const Expense = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    amount: { type: String, required: true },
  },
  { collection: "expenses" }
);

const model = mongoose.model("Expense", Expense);
module.exports = model;
