import { Request, Response } from "express"
import { User, ValidationError } from "../models/user";
import { selectUserByUuid, users } from "../db/users";
import { Transaction } from "../models/transaction";
export const getTransactionByUuid = (req: Request, res: Response) => {
    try {
        const uuidFilter = req.params.transactionUUID;
        const userIndex = req.body.userIndex;
        const userFound = selectUserByUuid(userIndex)
    if(!userFound) {
      throw new ValidationError('Usuario não encontrado!!!');
    }
        const getTransaction=userFound.getTransactions().find((item : Transaction)=>item.getUuidTransaction()===uuidFilter)
        if(!getTransaction) {
            throw new ValidationError("Transação não encontrada!!!");
        }
        return res.status(200).json(getTransaction);
    }
        catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro Interno." });
    }
};
