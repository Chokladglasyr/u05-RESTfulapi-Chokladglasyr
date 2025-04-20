import express, {Request, Response} from "express";
import { createList_item, deleteList_item, getList_items, getList_itemsByList, getList_itemsByUser, updateList_item } from "../controllers/list_itemsController";
import { adminCheck, authCheck } from "../middlewares/authMiddleware";


const list_itemRouter = express.Router();

list_itemRouter.get('/', getList_items);
list_itemRouter.get('/user', getList_itemsByUser);
list_itemRouter.get('/:id', getList_itemsByList);
list_itemRouter.post('/create/:id',authCheck, adminCheck, createList_item);
list_itemRouter.put('/:userid/:id', authCheck, adminCheck, updateList_item);
list_itemRouter.delete('/:userid/:id', authCheck, adminCheck, deleteList_item);

export default list_itemRouter;