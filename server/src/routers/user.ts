import express from "express";
import { Delete, GetAll, GetOne, Login, SignUp, Me } from "../controllers/user";

const router = express.Router();

router.get("/me", Me);
router.get("/:id", GetOne);
router.get("/", GetAll);
router.post("/create", SignUp);
router.post("/login", Login);
router.get("/delete/:id", Delete);

export default router;
