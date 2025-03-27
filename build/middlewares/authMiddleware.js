"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCheck = exports.authCheck = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const authCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "You need to log in to be able to do that" });
        return;
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No Access" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.authCheck = authCheck;
const adminCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isAdmin = yield userModel_1.default.findOne({ _id: req.userId }).select("admin");
    if ((req.userId != req.params.userid)) {
        if (!isAdmin || (isAdmin.admin != true)) {
            res.status(403).json({ message: "You don't have the authorization to do that." });
            return;
        }
    }
    next();
});
exports.adminCheck = adminCheck;
