const express = require("express");
const authController = require("../controller/auth.controller");
const Router = express.Router();
// [GET] /api/auth/
Router.get("/", authController.index);
Router.post("/register", authController.register);

module.exports = Router;
