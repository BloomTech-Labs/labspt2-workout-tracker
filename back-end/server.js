const express = require("express");
const cors = require("cors");
const db = require("./data/dbConfig.js");
const stripe = require("stripe")("sk_test_vUV2Q6vSUhL4aTpoYVNFHHCb00mmhjNqOl");

const server = express();

const whitelist = [
  "https://workout-tracker-pt2.netlify.com/",
  "http://localhost:3000"
];
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

server.use(express.json());
server.use(cors(corsOptions));
server.use(require("body-parser").text());

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

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db("users")
    .where("id", id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The specified user could not be retrieved" });
    });
});
server.get("/api/users/:id/workouts", (req, res) => {
  db("workouts")
    .select()
    .where("id", id)
    .then(workouts => {
      res.status(200).json(workouts);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The workout information could not be retrieved." });
    });
});
// POST request handler for the stripe charge:
server.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = server;
