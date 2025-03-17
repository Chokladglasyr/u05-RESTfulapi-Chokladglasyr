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
        price: parseInt(price) || 0,
    };
    list_items.push(newItem);
    const items = list_items.filter((i) => i.listId === parseInt(req.params.id));

    res.status(201).json(items);
};
export const updateList_item = (req: Request, res: Response) => {
    const { link, description, photo, price } = req.body;
    const list_itemIndex = list_items.findIndex((i) => (i.id) === parseInt(req.params.id));
    if (list_itemIndex === -1) {
        res.status(404).json({message: "Item not found"});
        return;
    }
    list_items[list_itemIndex] = {... list_items[list_itemIndex],
        link: link ?? list_items[list_itemIndex].link,
        description: description ?? list_items[list_itemIndex].description,
        photo: photo ?? list_items[list_itemIndex].photo,
        price: price ?? list_items[list_itemIndex].price,
    };
    res.json({message: "List item updated", list_item: list_items[list_itemIndex]});
    
};
export const deleteList_item = (req: Request, res: Response) => {

};