import express, {Request, Response} from "express";
import { getListByUsername, getLists, updateListByUsername } from "../controllers/listController";


const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.get('/:name', getListByUsername);
// listRouter.post('/', createUser);
listRouter.put('/:name', updateListByUsername);
// listRouter.delete('/:name', deleteUser);

export default listRouter;