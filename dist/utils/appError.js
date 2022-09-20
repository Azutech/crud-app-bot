"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusMessage = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}
exports.default = AppError;
