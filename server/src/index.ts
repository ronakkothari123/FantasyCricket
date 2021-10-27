import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import "reflect-metadata";
import dotenv from "dotenv";
import { MyContext } from "./types";
import userRouter from "./routers/user";
import cors from "cors";
import session from "express-session";

dotenv.config();
const app = express();
const PORT = 5000;

export const Context: MyContext = {
    em: undefined,
};

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    console.log(process.env.PG_USER);

    Context.em = orm.em;

    await orm.getMigrator().up();

    app.listen(PORT, () => console.log(`Alive on  http://localhost:${PORT}`));

    app.use(express.json());
    app.use(
        session({
            secret: process.env.COOKIE_SECRET ?? "",
            resave: false,
            saveUninitialized: false,
        })
    );
    app.use(
        cors({
            origin: "*",
        })
    );
    app.use("/user", userRouter);

    app.get("/", (_, res) => {
        res.send("Hello, World");
    });
};

main().catch(console.error);
