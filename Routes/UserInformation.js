const User = require("../models/User");
const express = require("express");
const bcrypt = require("bcryptjs");
const fetchuser = require("../middlewares/fetchuser");
var jwt = require("jsonwebtoken");
const Router = express.Router();
const { body, validationResult } = require("express-validator");
const JWT = "Login@userToken";
//Updating the user description
Router.put(
  "/AboutMe",
  fetchuser,
  [
    body("Description", "Description Should of atleast 50 characters").isLength(
      { min: 50 }
    ),
    body("email", "enter a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { Description, email } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ error: "The User with this email Id does not exist" });
      } else {
        user.Description = Description;
        user.save();
        res.send({
          message: "Description of the user is successfully updated",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);
Router.put(
  "/SocialMedialinks",
  fetchuser,
  [
    body("email", "enter a valid email").isEmail(),
    body("facebook", "Enter a Valid Url"),
    body("Instagram", "Enter a Valid Url"),
    body("Linkedin", "Enter a Valid Url"),
    body("Github", "Enter a Valid Url"),
    body("Twitter", "Enter a Valid Url"),
    body("Website", "Enter a Valid Url"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { facebook, Instagram, Twitter, Linkedin, Github, Website, email } =
        req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ error: "The User with this email Id does not exist" });
      } else {
        user.SocialMediaLinks.facebook = facebook;
        user.SocialMediaLinks.Instagram = Instagram;
        user.SocialMediaLinks.Twitter = Twitter;
        user.SocialMediaLinks.Linkedin = Linkedin;
        user.SocialMediaLinks.Github = Github;
        user.SocialMediaLinks.Website = Website;
        user.save();
        res.send({
          message: "Links of the User is Updated Successfully",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);
Router.put(
  "/PersonalInformation",
  fetchuser,
  [
    body("email", "enter a valid email").isEmail(),
    body("HighestEducation"),
    body("CurrentlyStudying"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { HighestEducation, CurrentlyStudying, email } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ error: "The User with this email Id does not exist" });
      } else {
        user.PersonalInformation.HighestEducation = HighestEducation;
        user.PersonalInformation.CurrentlyStudying = CurrentlyStudying;
        user.save();
        res.send({
          message: "Personal Information of the User is successfully Updated",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);
Router.put(
  "/Interests",
  fetchuser,
  [body("email", "enter a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { Interests, email } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ error: "The User with this email Id does not exist" });
      } else {
        user.interests = Interests;
        user.save();
        console.log("Interests", Interests);
        res.send({
          message: "Interests of the user is successfully updated",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);
Router.put(
  "/Information",
  fetchuser,
  [
    body("name", "Name length should be greater than 2").isLength({ min: 3 }),
    body("Phone", "Phone Number be of 10 digits").isLength(10),
    body("email", "Enter a valid Email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let { name, Phone, email } = req.body;
      console.log(name);
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ error: "The User with this email Id does not exist" });
      } else {
        user.name = name;
        user.Phone = Phone;
        user.save();
        res.send({
          message: "Information Of the User is successfully updated",
          user: user,
        });
      }
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = Router;
