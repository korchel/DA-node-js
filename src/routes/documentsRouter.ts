import { Request, Response, Router } from "express";

import {
  IDocumentInputModel,
  IDocumentViewModel,
  IdParam,
  RequestWithBody,
  RequestWithParams,
  RequestWithParamsAndBody,
} from "../interfaces";
import { STATUS } from "../statusCodes";
import { db } from "../mockDb";

export const documentsRouter = Router();

documentsRouter.get(
  "/",
  (req: Request, res: Response<IDocumentViewModel[]>) => {
    const documentView = db.documents.map((doc) => ({
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
    }));
    res.status(STATUS.OK_200).json(documentView);
  }
);

documentsRouter.post(
  "/",
  (req: RequestWithBody<IDocumentInputModel>, res: Response) => {
    const newDocument = req.body;
    if (Object.keys(newDocument).length !== 6) {
      res.sendStatus(STATUS.BAD_REQUEST_400);
    }
    db.documents.push({
      ...newDocument,
      id: 10,
      creationDate: "11.11.1111",
      updateDate: "11.11.1111",
    });
    res.sendStatus(STATUS.CREATED_201);
  }
);

documentsRouter.get(
  "/:id",
  (
    req: RequestWithParams<IdParam>,
    res: Response<IDocumentViewModel | string>
  ) => {
    const id = req.params.id;
    const requestedDocument = db.documents.find((doc) => doc.id === +id);
    console.log(requestedDocument);
    if (!requestedDocument) {
      res.status(STATUS.NOT_FOUND_404).json("No such item");
    }
    res.status(STATUS.NO_CONTENT_204).send(requestedDocument);
  }
);

documentsRouter.delete(
  "/:id",
  (req: RequestWithParams<IdParam>, res: Response) => {
    const id = req.params.id;
    if (!id) {
      res.status(STATUS.BAD_REQUEST_400).send("id needed");
    }
    const foundDocument = db.documents.find((doc) => doc.id === +id);
    if (!foundDocument) {
      res.status(STATUS.NOT_FOUND_404).send("No such item");
    }
    db.documents = db.documents.filter((doc) => doc.id !== +id);
    res.sendStatus(STATUS.NO_CONTENT_204);
  }
);

documentsRouter.put(
  "/for_admin/:id",
  (
    req: RequestWithParamsAndBody<IdParam, IDocumentInputModel>,
    res: Response
  ) => {
    const recievedData = req.body;
    const id = req.params.id;
    if (!recievedData) {
      res.sendStatus(STATUS.BAD_REQUEST_400);
    }
    let document = db.documents.find((doc) => doc.id === +id);

    if (document) {
      const itemIndex = db.documents.indexOf(document);
      db.documents[itemIndex] = {
        ...document,
        ...recievedData,
        id: +id,
        updateDate: "12.11.1111",
      };
      res.sendStatus(STATUS.OK_200);
    }
    if (!document) {
      res.status(STATUS.NOT_FOUND_404).send("No such item");
    }
  }
);
