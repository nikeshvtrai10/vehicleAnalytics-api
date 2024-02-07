const http = require("http");

const express = require("express");

const cors = require("cors");

const logger = require("morgan");

const errorHandler = require("errorhandler");

const httpStatus = require("http-status");

const _ = require("lodash");

const path = require("path");

const jwt = require("jsonwebtoken");

require("dotenv").config({ path: `${__dirname}/../.env` });

const app = express();

//app.use(cors({ credentials: true, origin: true }));
// app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);

app.use(logger("tiny"));

app.set("port", process.env.PORT || 3000);

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Primary App Routes */
app.get("/", (_req, res) => {
  res.status(httpStatus.OK).json({
    data: {
      message:
        "API endpoints for project codename: Vehicle Analytics for Billboard Media",
    },
  });
});

/* API endpoints for user */
app.use("/v1/admin", require("./routes/v1/admin/login"));

/* API endpoints for agency */
app.use("/v1/agency", require("./routes/v1/agency/login"));

/* API endpoints for public */
app.use("/v1/public", require("./routes/v1/public/stream/index"));
app.use("/v1/public", require("./routes/v1/public/advertisement/index"));

// jwt
app.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers.authorization; // Express headers are auto converted to lowercase
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({
      error: "Auth Token is not supplied",
    });
  }
});

app.use("/v1/agency", require("./routes/v1/agency/index"));
app.use("/v1/admin", require("./routes/v1/admin/index"));

if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}

app.use((err, _req, res, next) => {
  if (!err) {
    next();
    return;
  }
  const errObj = _.pick(err, "message", "meta.url");
  let { statusCode } = err;

  if (!statusCode) {
    statusCode =
      err.constructor.name === "AssertionError"
        ? httpStatus.BAD_REQUEST
        : httpStatus.BAD_GATEWAY;
  }

  res.status(statusCode).json(errObj);
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: "API route not available" });
});
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  // eslint-disable-next-line no-console
  console.log(`listening on *:${app.get("port")} in ${app.get("env")} mode`);
});

module.exports = server;
