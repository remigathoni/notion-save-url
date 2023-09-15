const express = require("express");
require("dotenv").config();
const addItem = require("./notion");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Express API that saves links to a Notion database");
});

app.post("/add-url", async (req, res) => {
  try {
    const { name, link, category } = req.body;
    const response = await addItem(name, link, category);
    if (!name || !link || !category) {
      throw Error("Must include name, link, and category");
    }
    if (response.error) throw Error(response.error.message);
    return res.json({ success: true, error: null });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
module.exports = app;
