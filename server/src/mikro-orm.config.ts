import path from "path";
import { __prod__ } from "./constants";
import { User } from "./entities/user";
import { MyConfig } from "./types";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.ts$/,
    },
    entities: [User],
    dbName: "fantasycricket",
    user: undefined,
    password: "",
    type: "postgresql",
    debug: !__prod__,
} as MyConfig;
