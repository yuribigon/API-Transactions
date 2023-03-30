import { Request, Response } from "express"
import { User, ValidationError } from "../models/user";
import { insertUser, selectUserByUuid, users } from "../db/users";

export const insertTransactionController = (req: Request, res: Response) => {
  try {
    const userIndex = req.body.userIndex;
    const user = selectUserByUuid(userIndex);
    const title = req.body.title;
    const value = req.body.value;
    const type = req.body.type;

    if(!type) {
        throw new ValidationError('Tipo da transação inválido.');
    }
    //console.log(user);
    
    if(!user) {
      throw new ValidationError('User not found');
    }

    user.addTransaction(title, value, type);


    return res.status(200).json("Transação adicionado com sucesso!")
    
  } catch (error) {
    if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message })
    }
    return res.status(500).json({ message: 'Erro ao processar nova transação.' })
  }
}