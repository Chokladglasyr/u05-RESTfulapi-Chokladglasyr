import {Request, Response } from "express";
import { lists } from "../models/listModel";
import users from "../models/userModel";
import { title } from "process";

export const getLists = (req: Request, res: Response) => {
    res.json(lists);
};

export const getListByUsername = (req: Request, res: Response): void => {

    const user = users.find((u) => u.name == req.params.name);

    if(!user) {
         res.status(404).json({message: "Unfortunately, a user with that name was not found!"});
         return;
    }
   
    const list = lists.find((u) => u.userId === user.id)
    res.json(list);
};
export const updateListByUsername = (req: Request, res: Response): void => {
    const { title, description } = req.body;
    const user = users.find((u) => u.name === req.params.name);
    if(!user) {
        res.status(404).json({message: "Unfortunately, a user with that name was not found!"});
        return;
   }
  
   const listIndex = lists.findIndex((l) => l.userId === user.id);
   if (listIndex === -1) {
    res.status(404).json({ message: "Unfortunately, " });
    return;
    }
    lists[listIndex] = {...lists[listIndex], title: title ?? lists[listIndex].title, description: description ?? lists[listIndex].description};

    res.json({ message: "List updated successfully", list: lists[listIndex] });
};