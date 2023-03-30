import { Request, Response } from "express"
import { updateByUuid, users } from "../db/users";
import { ValidationError } from "../models/user";

export const updateUserController = (req: Request, res: Response) => {
    try {
        const uuidToUpdate = req.params.uuid;
        const {name, cpf, email, age} = req.body
        updateByUuid(name, cpf, email, age);
        const userUpdate = users.findIndex((user) => user.getUuid() === uuidToUpdate);
        if(userUpdate === -1) {
            throw new ValidationError("Usuario não existe.");
        }
        users[userUpdate].update(name, cpf, email, age);
        return res.status(200).json({ message: "Usuario atualizado com sucesso!" })
    }
    catch(error : any) {
        return res.status(400).json({ message: error.message })
    }
}
