import {Request, Response } from "express";
import User from "../models/userModel";


export const getUsers = async (req: Request, res: Response) => {
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
        }
        res.json(user);

    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmed_password } = req.body;
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

export const updateUser = async (req: Request, res: Response) => {
    try {


    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}

// export const updateUser = (req: Request, res: Response) => {
//     const { name } = req.body;

//     const user = users.find((u) => u.name === req.params.name);

//     if (!user) {
//         res.status(404).json({ message: "Unfortunately, a user with that name was not found!1" });
//         return;
//     }

//     const userIndex = users.findIndex((u) => u.id === user.id);
//     if (userIndex === -1) {
//         res.status(404).json({ message: "Unfortunately, a user with that name was not found!2" });
//         return;
//     }

//     users[userIndex] = {...users[userIndex], name: name ?? users[userIndex].name};

//     res.json({ message: "User updated successfully", user: users[userIndex] });
// };

// export const deleteUser = (req: Request, res: Response): void => {
    
//     const user = users.find((u) => u.name === req.params.name);

//     if (!user) {
//         res.status(404).json({ message: "Unfortunately, a user with that name was not found!3" });
//         return;
//     }

//     const userIndex = users.findIndex((u) => u.id === user.id);
//     if (userIndex === -1) {
//         res.status(404).json({ message: "Unfortunately, a user with that name was not found!4" });
//         return;
//     }
//     users.splice(userIndex, 1);
//     res.json({ message: "User deleted successfully" });
// }