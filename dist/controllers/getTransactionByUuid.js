"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionByUuid = void 0;
const user_1 = require("../models/user");
const users_1 = require("../db/users");
const getTransactionByUuid = (req, res) => {
    try {
        const uuidFilter = req.params.transactionUUID;
        const user = req.params.userUUID;
        const userFound = (0, users_1.selectUserByUuid)(user);
        if (!userFound) {
            throw new user_1.ValidationError('Usuario não encontrado!!!');
        }
        const getTransaction = userFound.getTransactions().find((item) => item.getUuidTransaction() === uuidFilter);
        if (!getTransaction) {
            throw new user_1.ValidationError("Transação não encontrada!!!");
        }
        return res.status(200).json(getTransaction);
    }
    catch (error) {
        if (error instanceof user_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro Interno." });
    }
};
exports.getTransactionByUuid = getTransactionByUuid;
