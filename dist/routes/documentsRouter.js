"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentsRouter = void 0;
const express_1 = require("express");
const statusCodes_1 = require("../statusCodes");
const mockDb_1 = require("../mockDb");
exports.documentsRouter = (0, express_1.Router)();
exports.documentsRouter.get("/", (req, res) => {
    const documentView = mockDb_1.db.documents.map((doc) => ({
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
    res.status(statusCodes_1.STATUS.OK_200).json(documentView);
});
exports.documentsRouter.post("/", (req, res) => {
    const newDocument = req.body;
    if (Object.keys(newDocument).length !== 6) {
        res.sendStatus(statusCodes_1.STATUS.BAD_REQUEST_400);
    }
    mockDb_1.db.documents.push(Object.assign(Object.assign({}, newDocument), { id: 10, creationDate: "11.11.1111", updateDate: "11.11.1111" }));
    res.sendStatus(statusCodes_1.STATUS.CREATED_201);
});
exports.documentsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const requestedDocument = mockDb_1.db.documents.find((doc) => doc.id === +id);
    console.log(requestedDocument);
    if (!requestedDocument) {
        res.status(statusCodes_1.STATUS.NOT_FOUND_404).json("No such item");
    }
    res.status(statusCodes_1.STATUS.NO_CONTENT_204).send(requestedDocument);
});
exports.documentsRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(statusCodes_1.STATUS.BAD_REQUEST_400).send("id needed");
    }
    const foundDocument = mockDb_1.db.documents.find((doc) => doc.id === +id);
    if (!foundDocument) {
        res.status(statusCodes_1.STATUS.NOT_FOUND_404).send("No such item");
    }
    mockDb_1.db.documents = mockDb_1.db.documents.filter((doc) => doc.id !== +id);
    res.sendStatus(statusCodes_1.STATUS.NO_CONTENT_204);
});
exports.documentsRouter.put("/for_admin/:id", (req, res) => {
    const recievedData = req.body;
    const id = req.params.id;
    if (!recievedData) {
        res.sendStatus(statusCodes_1.STATUS.BAD_REQUEST_400);
    }
    let document = mockDb_1.db.documents.find((doc) => doc.id === +id);
    if (document) {
        const itemIndex = mockDb_1.db.documents.indexOf(document);
        mockDb_1.db.documents[itemIndex] = Object.assign(Object.assign(Object.assign({}, document), recievedData), { id: +id, updateDate: "12.11.1111" });
        res.sendStatus(statusCodes_1.STATUS.OK_200);
    }
    if (!document) {
        res.status(statusCodes_1.STATUS.NOT_FOUND_404).send("No such item");
    }
});
