import express, {Express, Request, Response} from "express"
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../database/db";
import userRouter from  "../routes/userRoutes";
import listRouter from  "../routes/listRoutes";
import list_itemRouter from "../routes/list_itemRoutes";
import { createUser } from "../controllers/userController";
import { loginUser } from "../controllers/authController";
import { searchListsByName } from "../controllers/searchController";



dotenv.config(); 
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3003;

app.use(express.json());
app.use(cors({
    origin: process.env.NODE_ENV === "prod" ? process.env.ORIGIN_URL_PROD : process.env.ORIGIN_URL_LOCAL,
}
));

app.get('/', (req: Request, res: Response) => {
    res.send("RESTful API by Ida")});

app.use('/register', createUser);
app.use('/login', loginUser)

app.use('/users', userRouter);
app.use('/lists', listRouter);
app.use('/items', list_itemRouter);
app.use('/search', searchListsByName)

app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});