import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, console.log("PORT" + PORT));
