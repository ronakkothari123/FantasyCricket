import path from "path";
import { __prod__ } from "./constants";
import { User } from "./entities/user";
import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/core";

dotenv.config();

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [User],
    dbName: "fantasycricket",
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
