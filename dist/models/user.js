"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.ValidationError = void 0;
const uuid_1 = require("uuid");
const transaction_1 = require("./transaction");
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
const TIPOS_VALIDOS = ['income', 'outcome'];
class User {
    constructor(name, cpf, email, age, transactions = []) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = transactions;
        this.setName(name);
        this.uuid = (0, uuid_1.v4)();
    }
    /*  if (name.split(' ').length < 2) throw new ValidationError('Nome inválido'); */
    getUuid() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCpf() {
        return this.cpf;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    getTransactions() {
        return this.transactions;
    }
    addTransaction(title, value, type) {
        if (TIPOS_VALIDOS.map(i => i.toLowerCase()).includes(type.toLowerCase())) {
            const newTransaction = new transaction_1.Transaction(title, value, type);
            this.transactions.push(newTransaction);
        }
        else {
            const error = new ValidationError('Tipo invalido');
            throw error;
        }
    }
    deleteTransaction(index) {
        this.transactions.splice(index, 1);
    }
    updateTransaction(index, title, value, type) {
        this.transactions[index].updateTransaction(title, value, type);
    }
    update(name, cpf, email, age) {
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
    }
}
exports.User = User;
