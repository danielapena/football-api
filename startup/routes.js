const express = require("express");
const teams = require("../routes/teams");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(error);
};
