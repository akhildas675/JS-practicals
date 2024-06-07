const express = require("express");

const app = express();

const port = 3000;
app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

app.get("/dash");

app.get("*", (req, res) => {
  res.send("Invalid");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
