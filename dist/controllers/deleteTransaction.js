"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransactionController = void 0;
const users_1 = require("../db/users");
const deleteTransactionController = (req, res) => {
    try {
        const { transactionID, userID } = req.params;
        if (typeof transactionID !== 'string' || typeof userID !== 'string') {
            return res.status(400).json({ message: "Dado informado incorreto." });
        }
        (0, users_1.deleteTransaction)(userID, transactionID);
        return res.status(200).json({ message: "Transação deletada com sucesso." });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
exports.deleteTransactionController = deleteTransactionController;
