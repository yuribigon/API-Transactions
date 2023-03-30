"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationMiddleware = void 0;
const users_1 = require("../db/users");
const userValidationMiddleware = (req, res, next) => {
    const userID = req.params.userID;
    const userIndex = users_1.users.findIndex((user) => user.getUuid() === userID);
    if (userIndex !== -1) {
        req.body.userIndex = userIndex;
        next();
    }
    return res.status(404).json({ message: "Usuario nao encontrado." });
};
exports.userValidationMiddleware = userValidationMiddleware;
