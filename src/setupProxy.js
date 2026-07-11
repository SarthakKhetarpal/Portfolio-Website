// CRA dev-server middleware (loaded automatically by react-scripts on `npm start`).
// Mounts the same serverless handlers Vercel uses in production, so
// /api/gfgdata and /api/send-email work identically in local development.
// This file is NOT included in the production bundle.

const express = require("express");

module.exports = function (app) {
  app.use(express.json());

  const gfgdata = require("../api/gfgdata.js");
  const sendEmail = require("../api/send-email.js");

  app.all("/api/gfgdata", (req, res) => gfgdata(req, res));
  app.post("/api/send-email", (req, res) => sendEmail(req, res));
};
