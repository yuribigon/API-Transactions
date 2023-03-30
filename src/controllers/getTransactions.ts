import { Request, Response } from "express";
import { ValidationError } from "../models/user";
import { Transaction } from "../models/transaction";
import { getUserTransactions } from "../db/users";

export const getTransactions = (req: Request, res: Response) => {
    try {
        const indice = req.body.userIndex;
        const transactions : Array<Transaction> = getUserTransactions(indice);
        if(!transactions.length)res.status(200).json("Esse usuario ainda não tem nenhuma transacao.");
        res.status(200).json(transactions);
    }
  catch(error : any) {
    return res.status(400).json({ message: error.message })
  }
}
