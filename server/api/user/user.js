const express = require("express");
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register", async (req, res) => {
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

router.post("/login", async (req, res) => {
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

module.exports = router;
