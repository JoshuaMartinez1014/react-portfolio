const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  // Any route that gets to this point will be redirected to your React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
