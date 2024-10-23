import express, { Request, Response } from "express";
// import { userRouter } from "./routes/user.routes.js";

const PORT = 8080;

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello!!!");
});

app.get("/documents", (req: Request, res: Response) => {});

app.get("/documents/:id", (req: Request, res: Response) => {});

app.delete("/documents/:id", (req: Request, res: Response) => {});

app.put("/for_admin/:id", (req: Request, res: Response) => {});

// app.use("/api", userRouter);

app.listen(PORT, () => console.log("PORT" + PORT));
