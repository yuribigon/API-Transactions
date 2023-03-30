"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const user_1 = require("../models/user");
const users_1 = require("../db/users");
const createUserController = (req, res) => {
    try {
        const { name, cpf, email, age } = req.body;
        const newUser = new user_1.User(name, cpf, email, age);
        (0, users_1.insertUser)(newUser);
        users_1.users.push(newUser);
        return res.status(200).json("Usuario criado com sucesso!");
    }
    catch (error) {
        if (error instanceof user_1.ValidationError) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao processar novo usuario.' });
    }
};
exports.createUserController = createUserController;
