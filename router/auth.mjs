import express, { Router } from "express";

const router = express.Router();

// 회원 가입
router.post("/signup", authController.signup);

// 로그인
router.post("/login", authController.login);

// 로그인 유지

export default router;
