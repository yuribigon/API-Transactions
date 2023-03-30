"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUuidController = void 0;
const users_1 = require("../db/users");
const transaction_1 = require("../models/transaction");
const getUserByUuidController = (req, res) => {
    try {
        const uuidFilter = req.params.uuid;
        const userFound = (0, users_1.selectUserByUuid)(uuidFilter);
        if (userFound) {
            res.status(200).json({
                'id': userFound.getUuid(),
                'name': userFound.getName(),
                'cpf': userFound.getCpf(),
                'email': userFound.getEmail(),
                'age': userFound.getAge()
            });
        }
        else {
            throw new transaction_1.ValidationError("Usuario não encontrado.");
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.getUserByUuidController = getUserByUuidController;
