import { Request, Response } from "express"
import { selectUserByUuid } from "../db/users";
import { ValidationError } from "../models/transaction";

export const getUserByUuidController = (req: Request, res: Response) => {
    try {
        const uuidFilter = req.params.uuid;
        const userFound = selectUserByUuid(uuidFilter)
        
        if (userFound) {
          res.status(200).json({
            'id': userFound.getUuid(),
            'name': userFound.getName(),
            'cpf': userFound.getCpf(),
            'email': userFound.getEmail(),
            'age': userFound.getAge()
          })
        }
        else {
            throw new ValidationError("Usuario não encontrado.")
        }
    }
    catch(error : any) {
        res.status(404).json({ message: error.message })
    }
}
