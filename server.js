const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { PORT } = require("./config/variables");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", routes);

const port = PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));