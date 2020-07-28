const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { PORT } = require("./config/variables");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.json());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

/// error handlers
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const port = PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
