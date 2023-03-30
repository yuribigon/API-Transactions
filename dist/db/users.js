"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTransactionByUuid = exports.deleteTransaction = exports.getUserTransactions = exports.selectUsersByFilter = exports.updateByUuid = exports.deleteByUuid = exports.selectUserByUuid = exports.insertUser = exports.selectAllUsers = exports.users = void 0;
const userValidation_1 = require("../helpers/validations/userValidation");
const user_1 = require("../models/user");
exports.users = [
    new user_1.User('Fernando Alan', "123456789", 'fernando@email.com', 25),
    new user_1.User('Yuri Bigon', "987654321", 'yuri@email.com', 31),
    new user_1.User('Pedro Henrique', "987456321", 'pedro@email.com', 37),
    new user_1.User('Matheus Palma', "123654789", 'matheus@email.com', 25),
];
exports.users[0].addTransaction("Deposito", 250, "income");
exports.users[0].addTransaction("Saque", 100, "outcome");
exports.users[0].addTransaction("Saque", 125, "outcome");
const selectAllUsers = () => exports.users;
exports.selectAllUsers = selectAllUsers;
const insertUser = (user) => {
    if (exports.users.some(account => account.getEmail() === user.getEmail())) {
        throw new user_1.ValidationError("Já existe um usuario registrado com esse email.");
    }
    if (exports.users.some(account => account.getCpf() === user.getCpf())) {
        throw new user_1.ValidationError("Já existe um usuario registrado com esse CPF.");
    }
    (0, userValidation_1.userValidation)(user.getName(), user.getCpf(), user.getEmail(), user.getAge());
};
exports.insertUser = insertUser;
const selectUserByUuid = (uuidFilter) => {
    return exports.users.find((user) => user.getUuid() === uuidFilter);
};
exports.selectUserByUuid = selectUserByUuid;
const deleteByUuid = (uuidToRemove) => {
    const usersUpdated = exports.users.filter((user) => user.getUuid() !== uuidToRemove);
    if (exports.users.length === usersUpdated.length) {
        throw new user_1.ValidationError("Usuario não encontrado.");
    }
    else {
        exports.users = usersUpdated;
    }
};
exports.deleteByUuid = deleteByUuid;
const updateByUuid = (nome, cpf, email, age) => {
    (0, userValidation_1.userValidation)(nome, cpf, email, age);
};
exports.updateByUuid = updateByUuid;
const selectUsersByFilter = (nameFilter, cpfFilter, emailFilter) => {
    const filteredUser = exports.users.filter((user) => {
        const nameMatches = nameFilter
            ? user.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
            : true;
        const cpfMatches = cpfFilter
            ? user.getCpf() === cpfFilter.toUpperCase()
            : true;
        const emailMatches = emailFilter
            ? user.getEmail().toLowerCase().indexOf(emailFilter.toLowerCase()) >= 0
            : true;
        return nameMatches && cpfMatches && emailMatches;
    });
    return filteredUser;
};
exports.selectUsersByFilter = selectUsersByFilter;
const getUserTransactions = (index) => {
    return exports.users[index].getTransactions();
};
exports.getUserTransactions = getUserTransactions;
const deleteTransaction = (userID, transactionID) => {
    const indexUser = exports.users.findIndex((user) => user.getUuid() === userID);
    if (indexUser === -1) {
        throw new user_1.ValidationError("Usuario não encontrado.");
    }
    const indexTransaction = exports.users[indexUser].getTransactions()
        .findIndex((transaction) => transaction.getUuidTransaction() === transactionID);
    if (indexTransaction === -1) {
        throw new user_1.ValidationError("Transacao nao encontrada.");
    }
    exports.users[indexUser].deleteTransaction(indexTransaction);
};
exports.deleteTransaction = deleteTransaction;
const updateTransactionByUuid = (userID, transactionID, title, value, type) => {
    const indexUser = exports.users.findIndex((user) => user.getUuid() === userID);
    if (indexUser === -1) {
        throw new user_1.ValidationError("Usuario não encontrado.");
    }
    const indexTransaction = exports.users[indexUser].getTransactions()
        .findIndex((transaction) => transaction.getUuidTransaction() === transactionID);
    if (indexTransaction === -1) {
        throw new user_1.ValidationError("Transacao nao encontrada.");
    }
    exports.users[indexUser].updateTransaction(indexTransaction, title, value, type);
};
exports.updateTransactionByUuid = updateTransactionByUuid;
