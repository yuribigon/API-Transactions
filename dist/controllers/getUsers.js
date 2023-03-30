"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const users_1 = require("../db/users");
const user_1 = require("../models/user");
const getUsersController = (req, res) => {
    try {
        const nameFilter = req.query.name;
        if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
            throw new user_1.ValidationError("Nome informado invalido.");
        }
        const cpfFilter = req.query.cpf;
        if (typeof cpfFilter !== 'string' && cpfFilter !== undefined) {
            throw new user_1.ValidationError("CPF informado invalido.");
        }
        const emailFilter = req.query.email;
        if (typeof emailFilter !== 'string' && emailFilter !== undefined) {
            throw new user_1.ValidationError("Email informado invalido.");
        }
        const allUsers = (0, users_1.selectUsersByFilter)(nameFilter, cpfFilter, emailFilter);
        const usersFilteredMap = allUsers.map((user) => {
            return {
                "id": user.getUuid(),
                "name": user.getName(),
                "cpf": user.getCpf(),
                "email": user.getEmail(),
                "age": user.getAge()
            };
        });
        if (!usersFilteredMap.length) {
            res.status(404).json({ message: "Nenhum usuario foi encontrado!" });
        }
        res.json(usersFilteredMap);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
exports.getUsersController = getUsersController;
