import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

const main = async () => {
    mikroOrmConfig.user = process.env.PG_USER;
    mikroOrmConfig.password = process.env.PG_PASSWORD;

    const orm = await MikroORM.init(
        mikroOrmConfig as Parameters<typeof MikroORM.init>[0]
    );
    console.log(process.env.PG_USER);
    await orm.getMigrator().up();

    app.listen(PORT, () => console.log(`Alive on  http://localhost:${PORT}`));

    app.use(express.json());

    app.get("/", (_, res) => {
        res.send("Hello, World");
    });
};

main().catch(console.error);
