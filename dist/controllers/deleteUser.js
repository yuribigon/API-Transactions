"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = void 0;
const users_1 = require("../db/users");
const deleteUserController = (req, res) => {
    const uuidToRemove = req.params.uuid;
    (0, users_1.deleteByUuid)(uuidToRemove);
    try {
        return res.status(200).json({ message: "Usuario deletado com sucesso." });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
exports.deleteUserController = deleteUserController;
