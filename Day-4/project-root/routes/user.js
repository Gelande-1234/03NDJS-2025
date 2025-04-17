import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getMe, getAllUsers, deleteUser } from "../controllers/userController.js";

const router = express.Router();
router.get("/me", auth, getMe);
router.get("/users", auth, getAllUsers);
router.delete("/users/:id", auth, deleteUser);

export default router;
