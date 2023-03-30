"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = void 0;
const users_1 = require("../db/users");
const getTransactions = (req, res) => {
    try {
        const indice = req.body.userIndex;
        const transactions = (0, users_1.getUserTransactions)(indice);
        if (!transactions.length)
            res.status(200).json("Esse usuario ainda não tem nenhuma transacao.");
        res.status(200).json(transactions);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
exports.getTransactions = getTransactions;
