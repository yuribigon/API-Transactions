import { Request, Response } from "express";
import { selectAllUsers, selectUsersByFilter } from "../db/users";
import { ValidationError } from "../models/user";

export const getUsersController = (req: Request, res: Response) => {
  try {
    const nameFilter = req.query.name
    if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
      throw new ValidationError("Nome informado invalido.");
    }

    const cpfFilter = req.query.cpf
    if (typeof cpfFilter !== 'string' && cpfFilter !== undefined) {
      throw new ValidationError("CPF informado invalido.");
    }

    const emailFilter = req.query.email
    if (typeof emailFilter !== 'string' && emailFilter !== undefined) {
      throw new ValidationError("Email informado invalido.");
    }

    const allUsers = selectUsersByFilter(nameFilter, cpfFilter, emailFilter);

    const usersFilteredMap = allUsers.map((user) =>{
      return {
      "id" : user.getUuid(),
      "name" : user.getName(),
      "cpf" : user.getCpf(),
      "email" : user.getEmail(),
      "age" : user.getAge()
    }
    })
    if(!usersFilteredMap.length) {
      res.status(404).json({message : "Nenhum usuario foi encontrado!"});
    }
    res.json(usersFilteredMap);
}
  catch(error : any) {
    return res.status(400).json({ message: error.message })
  }
}
