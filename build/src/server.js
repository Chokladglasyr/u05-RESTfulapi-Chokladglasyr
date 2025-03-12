"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../database/db"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const listRoutes_1 = __importDefault(require("../routes/listRoutes"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3003;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("RESTful API by Ida");
});
app.use('/users', userRoutes_1.default);
app.use('/users/:id', listRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});
