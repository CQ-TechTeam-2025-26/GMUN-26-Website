import { Router } from "express";
import { loginRoute, logoutRoute, signUpRoute, verifyEmail, forgotPassword, resetPassword } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signUpRoute);
router.post("/login", loginRoute);
router.post("/logout", logoutRoute);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;