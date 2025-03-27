import {Request, Response } from "express";
import User from "../models/userModel";
import { AuthRequest } from "../interfaces/userInterface";

export const getUsers = async (req: AuthRequest, res: Response) => {
try {
    
    const users = await User.find();
    res.json(users);

} catch (error: unknown){
    if (error instanceof Error) {
        res.status(500).json({error: error.message});
        return;
    }
}
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404).json({message: "Can't find user"});
            return;
        }
        res.json(user);

    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const createUser = async (req: AuthRequest, res: Response) => {
    try {
        const user = await User.findOne({_id: req.userId}).select("admin");
        if(!user || (user.admin != true)) {
            res.status(403).json({message: "You don't have the authorization to do that."});
            return;
        }
        const { name, email, password, confirmed_password } = req.body;
        const userExists = await User.find({email: email});
        if (userExists) {
            res.status(404).json({message: "User already exists"});
            return;
        }
        const newUser = new User ({name, email, password, confirmed_password});
        await newUser.save();
        res.status(201).json({newUser});

    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}

export const updateUser = async (req: AuthRequest, res: Response) => {
    try {

        const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new: true});
        console.log(req.params.id);
        if (!user) {
            res.status(404).json({message: "User not found"});
            return;
        }
        
        res.json(user);
        
    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}

export const deleteUser = async (req: AuthRequest, res: Response) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            res.status(404).json({message: "User not found"});
            return;
        }
        res.json({message: "User deleted successfully."});
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}

