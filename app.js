import express from "express";

import routes from "./rest";

const app = express();
app.use(express.json());
app.use(require("helmet")());
app.use(require("morgan")('dev'));
app.use(require("cors")({
  origi: "*",
  credentials: true,
}));

// initialize the routes
routes(app);

export default app;