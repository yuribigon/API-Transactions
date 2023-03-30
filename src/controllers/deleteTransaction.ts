import { Request, Response } from "express"
import { deleteTransaction } from "../db/users";

export const deleteTransactionController = (req: Request, res: Response) => {
    try {
        const { transactionID } = req.params;
        const userIndex = req.body.userIndex;
        if(typeof transactionID !== 'string' || typeof userIndex !== 'number') {
            return res.status(400).json({ message: "Dado informado incorreto." });
        }
        deleteTransaction(userIndex, transactionID);
        return res.status(200).json({ message: "Transação deletada com sucesso." })
    }
    catch(error : any) {
        return res.status(404).json({ message: error.message })
    }
}