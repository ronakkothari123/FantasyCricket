"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = 5000;
const main = async () => {
    mikro_orm_config_1.default.user = process.env.PG_USER;
    mikro_orm_config_1.default.password = process.env.PG_PASSWORD;
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    console.log(process.env.PG_USER);
    await orm.getMigrator().up();
    app.listen(PORT, () => console.log(`Alive on  http://localhost:${PORT}`));
    app.use(express_1.default.json());
    app.get("/", (_, res) => {
        res.send("Hello, World");
    });
};
main().catch(console.error);
//# sourceMappingURL=index.js.map