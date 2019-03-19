const express = require("express");
const cors = require("cors");
const db = require("./data/dbConfig.js");

const server = express();
const corsOptions = {
  credentials: true,
  origin: "https://workout-tracker-pt2.netlify.com/"
};

server.use(express.json());
server.use(cors(corsOptions));

//custom middleware

function checkForResource(req, res, resource) {
  if (resource.length) {
    res.status(200).json(resource);
  } else {
    res
      .status(404)
      .json({ message: "The resource does not exist or is currently empty." });
  }
}

server.get("/", (req, res) => {
  res.send({ message: "working so far" });
});

server.get("/api/users", (req, res) => {
  db("users")
    .then(users => {
      checkForResource(req, res, users);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

module.exports = server;
