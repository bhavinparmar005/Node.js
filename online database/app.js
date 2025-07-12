const express = require("express");
const app = express();
const db = require("./database/db");
const port = 3632;

const admin = require("./models/adminTbl");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  await admin.create(req.body);
  res.end();
});

app.get("/", async (req, res) => {
  const data = await admin.find({});

  return res.json(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
