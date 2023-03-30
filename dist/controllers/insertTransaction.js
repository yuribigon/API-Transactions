"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTransactionController = void 0;
const user_1 = require("../models/user");
const users_1 = require("../db/users");
const insertTransactionController = (req, res) => {
    try {
        const uuid = req.params.userID;
        const user = (0, users_1.selectUserByUuid)(uuid);
        const title = req.body.title;
        const value = req.body.value;
        const type = req.body.type;
        if (!type) {
            throw new user_1.ValidationError('Tipo da transação inválido.');
        }
        //console.log(user);
        if (!user) {
            throw new user_1.ValidationError('User not found');
        }
        user.addTransaction(title, value, type);
        //const updatedUser = updateUserTransaction(user)
        return res.status(200).json("Transação adicionado com sucesso!");
    }
    catch (error) {
        if (error instanceof user_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao processar nova transação.' });
    }
};
exports.insertTransactionController = insertTransactionController;
