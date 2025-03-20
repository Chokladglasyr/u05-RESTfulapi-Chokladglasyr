import {Request, Response } from "express";
import List from "../models/listModel";
import User from "../models/userModel";

export const getLists = async (req: Request, res: Response) => {
    try {
        const lists = await List.find();
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
            res.status(404).json({message: "Can't find list"});
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

export const createList = async (req:Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const userId = req.params.id;
        const newList = new List ({ userId, title, description });
        await newList.save();
        res.status(201).json({newList});

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    
    }  
}
export const updateList = async (req: Request, res: Response) => {
    try {
        //add auth
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
export const deleteList = async (req: Request, res: Response) => {
try {
    const list = await List.findByIdAndDelete(req.params.id);
    if (!list) {
        res.status(404).json({message: "List not found"});
    }
    res.json({message: "List deleted."});
} catch (error: unknown) {
    if (error instanceof Error) {
        res.status(500).json({error: error.message});
        return;
    }
} 
}