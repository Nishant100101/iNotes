import express from "express";
import { body } from "express-validator";
import isAuth from "../controllers/auth/isAuth.js";
import handleLogout from "../controllers/auth/handleLogout.js";
import handleLogIn from "../controllers/auth/handleLogin.js";
import handleSignUp from "../controllers/auth/handleSignup.js";

const router = express.Router();

router.post(
  "/signup",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters."),
    body("email").isEmail().withMessage("Invalid email address."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters."),
  ],
  handleSignUp
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address."),
    body("password").isLength({ min: 8 }).withMessage("Invalid credentials."),
  ],
  handleLogIn
);

router.post("/logout", handleLogout);

router.get("/protected", isAuth);

export default router;
