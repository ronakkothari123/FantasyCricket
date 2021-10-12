import express from "express";
import { Context } from "../index";
import { User } from "../entities/user";

const router = express.Router();

router.get("/get/:id", async (req, res) => {
    const user = await Context.em?.findOne(User, {
        id: parseInt(req.params.id),
    });

    res.json({ name: user?.name }).status(200);
});

export default router;
