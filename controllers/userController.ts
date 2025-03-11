import {Request, Response } from "express";
import users from "../models/userModel"


const getUsers = (req: Request, res: Response) => {
    res.json(users);
};

const getUserByName = (req: Request, res: Response) => {
    const user = users.find((u) => u.name == req.params.name);
    if (!user) {
        res.status(404).json({message: "User not found"});
        return;
    }
    res.json(user);
};

const createUser = (req: Request, res: Response) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmed_password: req.body.confirmed_password,
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req: Request, res: Response) => {
    const user = users.find((u) => u.name === req.params.name);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const userId: number = user.id;
    const {name, email, password, confirmed_password} = req.body;
    const userIndex = users.find((u) => u.id === user.id);
    
    //incomplete
 
};




