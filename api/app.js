const express = require("express");
const cors = require("cors");
const createMiddleware = require("@apidevtools/swagger-express-middleware");
const statusRoutes = require("./controllers/status");
const recipeRoutes = require("./controllers/recipe");
const app = express();
createMiddleware("resources/swagger.json", app, (err, Middleware) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/ping", statusRoutes);
  app.use("/recipes", recipeRoutes);
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });
});

module.exports = app;