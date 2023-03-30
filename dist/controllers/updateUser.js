"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
const users_1 = require("../db/users");
const user_1 = require("../models/user");
const updateUserController = (req, res) => {
    try {
        const uuidToUpdate = req.params.uuid;
        const { name, cpf, email, age } = req.body;
        (0, users_1.updateByUuid)(name, cpf, email, age);
        const userUpdate = users_1.users.findIndex((user) => user.getUuid() === uuidToUpdate);
        if (userUpdate === -1) {
            throw new user_1.ValidationError("Usuario não existe.");
        }
        users_1.users[userUpdate].update(name, cpf, email, age);
        return res.status(200).json({ message: "Usuario atualizado com sucesso!" });
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
exports.updateUserController = updateUserController;
