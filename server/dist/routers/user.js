"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.get("/me", user_1.Me);
router.get("/:id", user_1.GetOne);
router.get("/", user_1.GetAll);
router.post("/create", user_1.SignUp);
router.post("/login", user_1.Login);
router.get("/delete/:id", user_1.Delete);
exports.default = router;
//# sourceMappingURL=user.js.map