import {Request, Response } from "express";
import { lists } from "../models/listModel";
import users from "../models/userModel";
import { list_items } from "../models/list_itemsModel";

export const getList_items = (req: Request, res: Response) => {
    res.json(list_items);
};
export const getList_itemsByList = (req: Request, res: Response): void => {
    // const list = lists.find((l) => l.id === parseInt(req.params.id));

    const items = list_items.filter((l) => l.listId === parseInt(req.params.id));
    if (!items) {
        res.status(404).json({message: "Can't find anything"});
        return;
    }
    res.json(items);
    
};
export const createList_item = (req: Request, res: Response) => {
    const list = lists.find((l) => l.id === parseInt(req.params.id));
    if (!list) {
        res.status(404).json({message: "Cannot find list"});
    }
    const { link, description, photo, price} = req.body;
    const newItem = {
        id: list_items.length + 1,
        listId: parseInt(req.params.id),
        link: link,
        description: description,
        photo: photo,
        price: parseInt(price)
    };
    list_items.push(newItem);
    const items = list_items.filter((i) => i.listId === parseInt(req.params.id));

    res.status(201).json(items);
};
export const updateList_item = (req: Request, res: Response) => {
    
};
export const deleteList_item = (req: Request, res: Response) => {

};