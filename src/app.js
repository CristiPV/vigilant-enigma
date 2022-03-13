import express from "express";
import { createServer } from "http";
import "dotenv/config";

import Length from "./util/length/length-converter.js";

// Environment variables
const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Creating the server
const app = express();
const httpServer = createServer(app);

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Welcome!" });
});

app.get("/convert/length", (req, res) => {
  const measure = req.query.measure;
  const system = req.query.system;

  const lengthToConvert = new Length(measure, system);

  res.send({
    original: {
      measure: lengthToConvert.measure,
      system: lengthToConvert.system,
    },
    converted: lengthToConvert.convert(),
  });
});

app.get("/*", (req, res) => {
  res.send({ error: "Resource not found." });
});

const server = httpServer.listen(SERVER_PORT, (error) => {
  if (error) console.error(error);

  console.log("Server has started on port", server.address().port);
});
