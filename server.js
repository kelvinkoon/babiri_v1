const express = require("express");
var cors = require("cors");
var sslRedirect = require("heroku-ssl-redirect");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(cors());
app.use(sslRedirect());

// Connect Database
connectDB();

// Define Routes
app.use("/api/teams", require("./routes/teams"));
app.use("/api/usage", require("./routes/usage"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", () => (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); // relative path
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
