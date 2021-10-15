import { Request, Response } from "express";
import { Context } from "../index";
import { User } from "../entities/user";
import argon2 from "argon2";

export const GetOne = async (req: Request, res: Response) => {
    const user = await Context.em?.findOne(User, {
        id: parseInt(req.params.id),
    });

    res.json({ name: user?.name }).status(200);
};

export const GetAll = async (_: Request, res: Response) => {
    const users = await Context.em?.find(User, {});

    res.json(users).status(200);
};

export const SignUp = async (req: Request, res: Response) => {
    const { name, password } = req.body;

    const existingUser = await Context.em?.findOne(User, { name: name });

    if (existingUser) {
        res.json({ error: "That username already exists" });
        return;
    }

    const hashedPassword = await argon2.hash(password);

    const user = Context.em!.create(User, { name, password: hashedPassword });
    await Context.em?.persistAndFlush(user);

    res.json({ name }).status(200);
};

export const Login = async (req: Request, res: Response) => {
    const { name, password } = req.body;

    try {
        const user = await Context.em!.findOne(User, { name });

        const valid = await argon2.verify(user!.password, password);

        if (!valid) {
            res.json({ error: "Incorrect password" }).status(200);
            return;
        }

        res.json(user).status(200);
    } catch {
        res.json({ error: "That user doesn't exist." }).status(200);
    }
};

export const Delete = async (req: Request, res: Response) => {
    await Context.em?.nativeDelete(User, { id: parseInt(req.params.id) });
    res.send("Success");
};
