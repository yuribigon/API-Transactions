"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const createUser_1 = require("./controllers/createUser");
const deleteUser_1 = require("./controllers/deleteUser");
const getTransactions_1 = require("./controllers/getTransactions");
const getUserByUuid_1 = require("./controllers/getUserByUuid");
const getUsers_1 = require("./controllers/getUsers");
const insertTransaction_1 = require("./controllers/insertTransaction");
const updateUser_1 = require("./controllers/updateUser");
const getTransactionByUuid_1 = require("./controllers/getTransactionByUuid");
const deleteTransaction_1 = require("./controllers/deleteTransaction");
const updateTransaction_1 = require("./controllers/updateTransaction");
function registerRoutes(app) {
    app.get('/users', getUsers_1.getUsersController);
    app.get('/user/:uuid', getUserByUuid_1.getUserByUuidController);
    app.post('/createuser', createUser_1.createUserController);
    app.put('/user/:uuid', updateUser_1.updateUserController);
    app.delete('/user/:uuid', deleteUser_1.deleteUserController);
    app.get('/user/:userID/transactions', getTransactions_1.getTransactions);
    app.get('/user/:userUUID/transactions/:transactionUUID', getTransactionByUuid_1.getTransactionByUuid);
    app.post('/user/:userID/transactions', insertTransaction_1.insertTransactionController);
    app.delete('/user/:userID/transactions/:transactionID', deleteTransaction_1.deleteTransactionController);
    app.put('/user/:userID/transactions/:transactionID', updateTransaction_1.updateTransactionController);
}
exports.registerRoutes = registerRoutes;
