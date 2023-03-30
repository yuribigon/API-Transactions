"use strict";
/*import { Request, Response } from "express"
import { User, ValidationError } from "../models/user";
import { insertUser, selectUserByUuid, users } from "../db/users";
export const getUserByUuidController = (req: Request, res: Response) => {
    try {
        const uuidFilter = req.params.uuid;
        const userFound = selectUserByUuid(uuidFilter)
    export const getTransactionByUuid = (req: Request, res: Response) => {
    const uuid = req.params.uuid;
    const user = selectUserByUuid(uuid);
    const title = req.body.title;
    const value = req.body.value;
    const type = req.body.type;
    if(!user) {
      throw new ValidationError('User not found');
    }
        const getTransactions=user.getUserTransactions().filter((item)=>item==user.uuidTransaction)
    }
    catch (error) {
        if (error instanceof user_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }

    }
};
*/ 
