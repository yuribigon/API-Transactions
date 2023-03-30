"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTransactionController = void 0;
const users_1 = require("../db/users");
const updateTransactionController = (req, res) => {
    try {
        const { transactionID, userID } = req.params;
        let { title, value, type } = req.body;
        if (typeof type === "string") {
            type = type.toLowerCase();
        }
        if (typeof transactionID !== 'string' || typeof userID !== 'string') {
            return res.status(400).json({ message: "Dados informados incorretos." });
        }
        if (typeof title !== 'string' &&
            (type !== "income" &&
                type !== "outcome") &&
            (typeof value !== 'number' || typeof Number(value))) {
            return res.status(400).json({ message: "Insira os dados a atualizar de forma correta." });
        }
        (0, users_1.updateTransactionByUuid)(userID, transactionID, title, value, type);
        return res.status(200).json({ message: "Transação atualizada com sucesso." });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
exports.updateTransactionController = updateTransactionController;
