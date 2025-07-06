const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.get("/signup", userController.renderSignup); //Render SignUp page (ejs)
router.post("/signup", wrapAsync(userController.signup)); //Signup function
router.get("/login", userController.renderLogin); // Render Login Page

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login // Login function
);

router.get("/logout", userController.logout); // Logout function

module.exports = router;
