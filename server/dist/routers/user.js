"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../index");
const user_1 = require("../entities/user");
const router = express_1.default.Router();
router.get("/get/:id", async (req, res) => {
    var _a;
    const user = await ((_a = index_1.Context.em) === null || _a === void 0 ? void 0 : _a.findOne(user_1.User, {
        id: parseInt(req.params.id),
    }));
    res.json({ name: user === null || user === void 0 ? void 0 : user.name }).status(200);
});
exports.default = router;
//# sourceMappingURL=user.js.map