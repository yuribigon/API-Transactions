import { Request, Response } from "express"
import { User, ValidationError } from "../models/user";
import { insertUser, users } from "../db/users";

export const createUserController = (req: Request, res: Response) => {
  try {
    const { name, cpf, email, age } = req.body;
    const newUser = new User(name, cpf, email, age);
    
    insertUser(newUser);
    users.push(newUser);
    return res.status(200).json("Usuario criado com sucesso!")
  } catch (error) {
    if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message })
    }
    return res.status(500).json({ message: 'Erro ao processar novo usuario.' })
  }
}
