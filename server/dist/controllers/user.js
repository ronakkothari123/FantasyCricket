"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Login = exports.SignUp = exports.GetAll = exports.GetOne = void 0;
const index_1 = require("../index");
const user_1 = require("../entities/user");
const argon2_1 = __importDefault(require("argon2"));
const GetOne = async (req, res) => {
    var _a;
    const user = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.findOne(user_1.User, {
        id: parseInt(req.params.id),
    }));
    res.json({ name: user === null || user === void 0 ? void 0 : user.name }).status(200);
};
exports.GetOne = GetOne;
const GetAll = async (_, res) => {
    var _a;
    const users = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.find(user_1.User, {}));
    res.json(users).status(200);
};
exports.GetAll = GetAll;
const SignUp = async (req, res) => {
    var _a, _b;
    const { name, password } = req.body;
    const existingUser = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.findOne(user_1.User, { name: name }));
    if (existingUser) {
        res.json({ error: "That username already exists" });
        return;
    }
    const hashedPassword = await argon2_1.default.hash(password);
    const user = index_1.Context.em.create(user_1.User, { name, password: hashedPassword });
    await ((_b = index_1.Context.em) === null || _b === void 0 ? void 0 : _b.persistAndFlush(user));
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
const Delete = async (req, res) => {
    var _a;
    await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.nativeDelete(user_1.User, { id: parseInt(req.params.id) }));
    res.send("Success");
};
exports.Delete = Delete;
//# sourceMappingURL=user.js.map