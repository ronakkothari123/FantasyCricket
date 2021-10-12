import express from "express";
import { GetAll, GetUser, Login, SignUp } from "../controllers/user";

const router = express.Router();

router.get("/:id", GetUser);
router.get("/", GetAll);
router.post("/create", SignUp);
router.post("/login", Login);

export default router;
