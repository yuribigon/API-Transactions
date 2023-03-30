"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.ValidationError = void 0;
const uuid_1 = require("uuid");
class ValidationError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ValidationError = ValidationError;
class Transaction {
    constructor(title, value, type) {
        this.title = title;
        this.value = value;
        this.type = type;
        this.uuidTransaction = (0, uuid_1.v4)();
    }
    getUuidTransaction() {
        return this.uuidTransaction;
    }
    getTitle() {
        return this.title;
    }
    getValue() {
        return this.value;
    }
    getType() {
        return this.type;
    }
    updateTransaction(title, value, type) {
        if (title) {
            this.title = title;
        }
        if (value) {
            this.value = value;
        }
        if (type) {
            this.type = type;
        }
    }
}
exports.Transaction = Transaction;
