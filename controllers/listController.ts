import {Request, Response } from "express";
import List from "../models/listModel";
import User from "../models/userModel";
import { AuthRequest } from "../interfaces/userInterface";

export const getLists = async (req: Request, res: Response) => {
    try {
        const lists = await List.find();
        if(!lists) {
            res.json({message: "Nothing found"})
            return;
        }
        res.json(lists)

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const getListByUserId = async (req:Request, res: Response) => {
    try {
        const list = await List.find({ userId: req.params.id}).exec();
        if(!list) {
            res.status(404).json({message: "Nothing found."});
            return;
        }
        res.json(list);

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    
    }
}

export const createList = async (req: AuthRequest, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.userId})
        const userId = req.userId;
        const { title, description } = req.body;
        const username = user?.name;
        const newList = new List ({ userId, username, title, description });
        await newList.save();
        res.status(201).json({newList});

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    
    }  
}
export const updateList = async (req: AuthRequest, res: Response) => {
    try {

        const list = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!list) {
            res.status(404).json({message: "List not found"});
            return;
        }
        res.json(list);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }  
}
export const deleteList = async (req: AuthRequest, res: Response) => {
try {

    const list = await List.findByIdAndDelete(req.params.id);
    if (!list) {
        res.status(404).json({message: "List not found"});
        return;
    }
    res.json({message: "List deleted."});
} catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({error: error.message});
        return;
    }
} 
}