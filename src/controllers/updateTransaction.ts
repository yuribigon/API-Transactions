import { Request, Response } from "express"
import { updateTransactionByUuid } from "../db/users";

export const updateTransactionController = (req: Request, res: Response) => {
    try {
        const transactionID = req.params.transactionID;
        const userIndex = req.body.userIndex;
        let { title, value, type } = req.body;
        if(typeof type === "string")  {
            type = type.toLowerCase();
        }
        if(typeof transactionID !== 'string') {
            return res.status(400).json({ message: "Dados informados incorretos." });
        }
        if(typeof title !== 'string' &&
        (type !== "income" &&
        type !== "outcome") &&
        (typeof value !== 'number' || typeof Number(value))) {
            return res.status(400).json({ message: "Insira os dados a atualizar de forma correta." }); 
        }
        updateTransactionByUuid(userIndex, transactionID, title, value, type);
        return res.status(200).json({ message: "Transação atualizada com sucesso." })
    }
    catch(error : any) {
        return res.status(404).json({ message: error.message })
    }
}