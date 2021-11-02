import express from "express";
import { Delete, GetAll, GetOne, Login, SignUp, Me } from "../controllers/user";
import csurf from "csurf";

const router = express.Router();

router.get("/me", csurf, Me);
router.get("/:id", csurf, GetOne);
router.get("/", csurf, GetAll);
router.post("/create", csurf, SignUp);
router.post("/login", csurf, Login);
router.get("/delete/:id", csurf, Delete);

export default router;
