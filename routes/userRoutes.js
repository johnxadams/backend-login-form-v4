import express from "express";

// controller
import {
  deleteUser,
  findAllUsers,
  loginUser,
  logout,
  registerUser,
  updateUsername,
} from "../controllers/userControllers.js";

// middlewares
import { validateUser, sanitizeUser } from "../middlewares/userValidation.js";

const router = express.Router();

router.get("/", findAllUsers);

router.post("/create", validateUser, sanitizeUser, registerUser);

router.post("/login", loginUser);

/// Why is logout a get request?
router.get("/logout", logout);

router.patch("/update/:id", updateUsername);

router.delete("/delete/:id", deleteUser);

export default router;
