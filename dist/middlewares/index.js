"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const userValidationMiddleware_1 = require("./userValidationMiddleware");
const registerMiddlewares = (app) => {
    app.get('/user/:userID/transactions', userValidationMiddleware_1.userValidationMiddleware);
    app.get('/user/:userID/transactions/:transactionUUID', userValidationMiddleware_1.userValidationMiddleware);
    app.post('/user/:userID/transactions', userValidationMiddleware_1.userValidationMiddleware);
    app.delete('/user/:userID/transactions/:transactionID', userValidationMiddleware_1.userValidationMiddleware);
    app.put('/user/:userID/transactions/:transactionID', userValidationMiddleware_1.userValidationMiddleware);
};
exports.registerMiddlewares = registerMiddlewares;
