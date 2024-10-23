import express, { Request, Response } from "express";
import { IDocumentInputModel, IDocumentViewModel, IdParam, RequestWithBody, RequestWithParams, RequestWithParamsAndBody } from "./interfaces";
import { STATUS } from "./statusCodes";
import { documents } from "./mockDb";
// import { userRouter } from "./routes/user.routes.js";

const PORT = 8080;

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello!!!");
});

app.get("/documents", (req: Request, res: Response<IDocumentViewModel[]>) => {
  const documentView = documents.map((doc) => (
    {
      id: doc.id,
      title: doc.title,
      number: doc.number,
      author: doc.author,
      type: doc.type,
      content: doc.content,
      creationDate: doc.creationDate,
      updateDate: doc.updateDate,
      public_document: doc.public_document,
      available_for: doc.available_for,
    }
  ))
  res.status(STATUS.OK_200).json(documentView);
});

app.post("/documents", (req: RequestWithBody<IDocumentInputModel>, res: Response) => {
  
});

app.get("/documents/:id", (req: RequestWithParams<IdParam>, res: Response<IDocumentViewModel>) => {});

app.delete("/documents/:id", (req: RequestWithParams<IdParam>, res: Response) => {});

app.put("/for_admin/:id", (req: RequestWithParamsAndBody<IdParam, IDocumentInputModel>, res: Response) => {});

// app.use("/api", userRouter);

app.listen(PORT, () => console.log("PORT" + PORT));
