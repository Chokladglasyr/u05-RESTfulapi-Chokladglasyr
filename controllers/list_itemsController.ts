import {Request, Response } from "express";
import List_item from "../models/list_itemsModel";
import List from "../models/listModel";
import User from "../models/userModel";
import { AuthRequest } from "../interfaces/userInterface";

export const getList_items = async (req: Request, res: Response) => {
    try {
        const list_items = await List_item.find();
        res.json(list_items);
    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const getList_itemsByUser = async (req: Request, res: Response) => {
    try {
        const { id }= req.query
        const list = await List.find({ userId: id}).exec();
        if (!list) {
            res.status(404).json({message: "Something went wrong"});
        }
        
        const listIds = list.map(item => item._id);
        
        const items = await List_item.find({ listId: listIds});
        if (!items) {
            res.status(404).json({message: "Nothing in the list"});
        }
        res.json(items);

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    } 
}

export const getList_itemsByList = async (req: Request, res: Response) => {
    try {
        const items = await List_item.find({listId: req.params.id});
        console.log(items);
        if (!items) {
            res.status(404).json({message: "Nothing found"});
        }
        res.json(items);

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const createList_item = async (req: Request, res: Response) => {
    try {
        const { link, description, price, photo } = req.body;
        const listId = req.params.id;
        const list = await List.find({_id: listId});
        const listName = list.map(list => list.title).toString();

        const newItem = new List_item ({ listId, link, description, price, photo, listName });
        await newItem.save();
        res.status(201).json({newItem, message: `added to ${listName}`});

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }  
}
export const updateList_item = async (req: AuthRequest, res: Response) => {
    try {
        let checkOwner = await List_item.findById(req.params.id);
        if (checkOwner) {
            const isOwner = await List.findById(checkOwner.listId);
           
            if (isOwner && (req.userId != isOwner.userId)) {
                res.status(403).json({message: "cannot"})
                return;
            }
        }
        const item = await List_item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!item) {
            res.status(404).json({message: "Can't find item."})
        }
        res.json({message: "Item updated!", item});

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }  
}
export const deleteList_item = async (req: AuthRequest, res: Response) => {
    try {
        let checkOwner = await List_item.findById(req.params.id);
        if (checkOwner) {
            const isOwner = await List.findById(checkOwner.listId);
           
            if (isOwner && (req.userId != isOwner.userId)) {
                res.status(403).json({message: "cannot"})
                return;
            }
        }
        const item = await List_item.findByIdAndDelete(req.params.id);
        console.log(item);
        if(!item) {
            res.status(404).json({message: "Can't find item."})
        }
        res.json({message: "Item deleted."});

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
