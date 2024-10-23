"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { userRouter } from "./routes/user.routes.js";
const PORT = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api", (req, res) => {
    res.send("Hello!!!");
});
app.get("/documents", (req, res) => { });
app.get("/documents/:id", (req, res) => { });
app.delete("/documents/:id", (req, res) => { });
app.put("/for_admin/:id", (req, res) => { });
// app.use("/api", userRouter);
app.listen(PORT, () => console.log("PORT" + PORT));
