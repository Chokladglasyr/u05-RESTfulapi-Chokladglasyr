"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../database/db"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const listRoutes_1 = __importDefault(require("../routes/listRoutes"));
const list_itemRoutes_1 = __importDefault(require("../routes/list_itemRoutes"));
const userController_1 = require("../controllers/userController");
const authController_1 = require("../controllers/authController");
const searchController_1 = require("../controllers/searchController");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3003;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === "prod" ? process.env.ORIGIN_URL_PROD : process.env.ORIGIN_URL_LOCAL,
}));
app.get('/', (req, res) => {
    res.send("RESTful API by Ida");
});
app.use('/register', userController_1.createUser);
app.use('/login', authController_1.loginUser);
app.use('/users', userRoutes_1.default);
app.use('/lists', listRoutes_1.default);
app.use('/items', list_itemRoutes_1.default);
app.use('/search', searchController_1.searchListsByName);
app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});
