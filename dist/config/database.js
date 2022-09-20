"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('debug', true);
mongoose_1.default.Promise = global.Promise;
const uri = 'mongodb+srv://azudev:<password>@cluster0.5rbg3lj.mongodb.net/test';
const database = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(uri, { useMongoClient: true })
        .then(() => {
        console.log('Connectrd to MongoDB');
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = database;
