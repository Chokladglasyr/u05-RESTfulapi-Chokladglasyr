import express, {Express, Request, Response} from "express"
import dotenv from "dotenv";
import connectDB from "../database/db";
import userRouter from  "../routes/userRoutes";


dotenv.config(); 
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3003;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("RESTful API by Ida")
});

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});