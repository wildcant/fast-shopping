const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { PORT } = require("./config/variables");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", routes);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers
if (process.env.NODE_ENV !== "production") {
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
