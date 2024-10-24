"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const documentsRouter_1 = require("./routes/documentsRouter");
const cors_1 = __importDefault(require("cors"));
// import { db } from "./db/db";
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/documents", documentsRouter_1.documentsRouter);
exports.app.get("/api", (req, res) => {
    res.send("Hello!!!");
});
