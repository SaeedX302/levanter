const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running 👑");
});

function keepAlive() {
  app.listen(3000, () => {
    console.log("✅ KeepAlive Server Started");
  });
}

module.exports = keepAlive;
