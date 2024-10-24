import express from "express";
import { documentsRouter } from "./routes/documentsRouter";
import cors from 'cors';
// import { db } from "./db/db";

export const app = express();
app.use(express.json());
app.use(cors());

app.use("/documents", documentsRouter);

app.get("/api", (req, res) => {
  res.send("Hello!!!");
});

