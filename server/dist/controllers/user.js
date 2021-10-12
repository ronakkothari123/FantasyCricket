"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.SignUp = exports.GetAll = exports.GetUser = void 0;
const index_1 = require("../index");
const user_1 = require("../entities/user");
const argon2_1 = __importDefault(require("argon2"));
const GetUser = async (req, res) => {
    var _a;
    const user = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.findOne(user_1.User, {
        id: parseInt(req.params.id),
    }));
    res.json({ name: user === null || user === void 0 ? void 0 : user.name }).status(200);
};
exports.GetUser = GetUser;
const GetAll = async (_, res) => {
    var _a;
    const users = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.find(user_1.User, {}));
    res.json(users).status(200);
};
exports.GetAll = GetAll;
const SignUp = async (req, res) => {
    var _a;
    const { name, password } = req.body;
    const hashedPassword = await argon2_1.default.hash(password);
    const user = index_1.Context.em.create(user_1.User, { name, password: hashedPassword });
    await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.persistAndFlush(user));
    res.json({ name }).status(200);
};
exports.SignUp = SignUp;
const Login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await index_1.Context.em.findOne(user_1.User, { name });
        const valid = await argon2_1.default.verify(user.password, password);
        if (!valid) {
            res.json({ error: "Incorrect password" }).status(200);
            return;
        }
        res.json(user).status(200);
    }
    catch (_a) {
        res.json({ error: "That user doesn't exist." }).status(200);
    }
};
exports.Login = Login;
//# sourceMappingURL=user.js.map