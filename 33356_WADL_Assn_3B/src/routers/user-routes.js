const express = require("express");
const router = new express.Router();
const User = require("../models/user-model");

router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    console.log(user);
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    console.log(user);
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.body.id);
    console.log("User Deleted:", user);
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/change-password", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body.id, {
      password: req.body.password,
    });
    console.log("User Password Changed:", user);
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
