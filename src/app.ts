import express from "express";
import { documentsRouter } from "./routes/documentsRouter";

export const app = express();
app.use(express.json());

app.use("/documents", documentsRouter);

app.get("/api", (req, res) => {
  res.send("Hello!!!");
});
