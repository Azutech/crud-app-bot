"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.PORT) {
    console.log('Error to get ports');
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
// app.use(helmet());
// app.use(cors());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));
exports.default = server;
