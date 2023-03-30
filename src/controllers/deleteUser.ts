import { Request, Response } from "express"
import { deleteByUuid } from "../db/users";

export const deleteUserController = (req: Request, res: Response) => {
  const uuidToRemove = req.params.uuid;
  deleteByUuid(uuidToRemove);
  try {
    return res.status(200).json({ message: "Usuario deletado com sucesso." })
  }
  catch(error : any) {
    return res.status(404).json({ message: error.message })
  }
}
