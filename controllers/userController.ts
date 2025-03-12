import {Request, Response } from "express";
import users from "../models/userModel"
import User from "../interfaces/userInterface";


export const getUsers = (req: Request, res: Response) => {
    res.json(users);
};

export const getUserByName = (req: Request, res: Response) => {
    const user = users.find((u) => u.name == req.params.name);
    if (!user) {
        res.status(404).json({message: "User not found"});
        return;
    }
    res.json(user);
};

export const createUser = (req: Request, res: Response) => {
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

export const updateUser = (req: Request, res: Response) => {
    const { name } = req.body;

    const user = users.find((u) => u.name === req.params.name);

    if (!user) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }

    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex === -1) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }

    users[userIndex] = {...users[userIndex], name: name ?? users[userIndex].name};

    res.json({ message: "User updated successfully", user: users[userIndex] });
};

export const deleteUser = (req: Request, res: Response) => {
    
    const user = users.find((u) => u.name === req.params.name);

    if (!user) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }

    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex === -1) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
}