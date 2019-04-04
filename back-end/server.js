const express = require('express');
const cors = require('cors');
const db = require('./data/dbConfig.js');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const configureRoutes = require('./routes/index');

dotenv.config();

const server = express();

const whitelist = [
  'https://workout-tracker-pt2.netlify.com',
  'http://localhost:3000'
];

const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

server.use(express.json());
server.use(cors(corsOptions));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://workout-tracker-pt2.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: 'https://workout-tracker-pt2.herokuapp.com/',
  issuer: 'https://workout-tracker-pt2.auth0.com/',
  algorithms: ['RS256']
});

//custom middleware

function checkForResource(req, res, resource) {
  if (resource.length) {
    res.status(200).json(resource);
  } else {
    res
      .status(404)
      .json({ message: 'The resource does not exist or is currently empty.' });
  }
}

server.get('/', (req, res) => {
  res.send({ message: 'working so far' });
});

configureRoutes(server);

server.get('/api/users', checkJwt, (req, res) => {
  req.body.email = req.user.sub;
  req.body.password = 'test password';
  db('users')
    .then(users => {
      checkForResource(req, res, users);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The users information could not be retrieved.' });
    });
});

server.post('/api/users', checkJwt, (req, res) => {
  req.body.email = req.user.sub;
  req.body.password = 'test password';
  const user = req.body;
  db.insert(user)
    .into('users')
    .then(id => {
      console.log(id);
      db('users')
        .then(users => {
          res.status(201).json(users);
        })
        .catch(err => {
          console.log('error', err);
          res
            .status(500)
            .json({ error: 'The users information could not be retrieved.' });
        });
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({
        error: 'There was an error saving the user to the database.'
      });
    });
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db('users')
    .where('id', id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The specified user could not be retrieved' });
    });
});

server.get('/api/users/:id/workouts', (req, res) => {
  db('workouts')
    .select()
    .where('id', id)
    .then(workouts => {
      res.status(200).json(workouts);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The workout information could not be retrieved.' });
    });
});

server.get('/api/users/:id/progress', (req, res) => {
  db('progress')
    .select()
    .where('id', id)
    .then(progress => {
      res.status(200).json(progress);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The progress information could not be retrieved.' });
    });
});

server.get('/api/users/:id/excercises', (req, res) => {
  db('excercises')
    .select()
    .where('id', id)
    .then(excercises => {
      res.status(200).json(excercises);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The excercises information could not be retrieved.' });
    });
});

server.get('/api/users/:id/notes', checkJwt, (req, res) => {
  const { id } = req.params;
  db('notes')
    .where('id', id)
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The specified note could not be retrieved.' });
    });
});

server.get('/api/users/:id/notes', checkJwt, (req, res) => {
  const { id } = req.params;
  db('users').where('id', id);
});

server.post('/api/users/:id/notes/create', checkJwt, (req, res) => {});

server.put('/api/users/:id/notes/:id/create', checkJwt, (req, res) => {});

server.delete('/api/users/:id/notes/:id/create', checkJwt, (req, res) => {});

module.exports = server;
