const express = require('express');
const cors = require('cors');
const db = require('./data/dbConfig.js');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const request = require('superagent');

const configureRoutes = require('./routes/index');

dotenv.config();

const server = express();

const whitelist = [
  'https://workout-tracker-pt2.netlify.com',
  'http://localhost:3333'
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

const NON_INTERACTIVE_CLIENT_ID = '4h2Q9JyNTYzk8gHFD1BH55QLgKurtCH0';
const NON_INTERACTIVE_CLIENT_SECRET =
  'v-8R6RRNgOGPszr9qfgBd_ow6BaepyXJB83q-JxQPZQBBTO5yTNaBPr2sVje8O8Q';

const authData = {
  client_id: NON_INTERACTIVE_CLIENT_ID,
  client_secret: NON_INTERACTIVE_CLIENT_SECRET,
  grant_type: 'client_credentials',
  audience: 'https://workout-tracker-pt2.auth0.com/api/v2/'
};

function getAccessToken(req, res, next) {
  request
    .post('https://workout-tracker-pt2.auth0.com/oauth/token')
    .send(authData)
    .end(function(err, res) {
      if (res.body.access_token) {
        req.access_token = res.body.access_token;
        next();
      } else {
        res.send(401, 'Unauthorized');
      }
    });
}

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://workout-tracker-pt2.auth0.com/.well-known/jwks.json'
  }),

  //

  // Validate the audience and the issuer.
  audience: 'https://workout-tracker-pt2.herokuapp.com/',
  issuer: 'https://workout-tracker-pt2.auth0.com/',
  algorithms: ['RS256']
});

//custom middleware to check if resource exists

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

//ENDPOINT TO GET USER INFO USING MANAGEMENT API

server.get('/userinfo', getAccessToken, checkJwt, (req, res) => {
  const user_id = req.user.sub;
  request
    .get(`https://workout-tracker-pt2.auth0.com/api/v2/users/${user_id}`)
    .set('Authorization', 'Bearer ' + req.access_token)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.send(403, '403 Forbidden');
      console.log(err);
    });
});

//ENDPOINT TO UPDATE USER INFO USING MANAGEMENT API

server.patch('/userupdate', getAccessToken, checkJwt, (req, res) => {
  const user_id = req.user.sub;
  const update = req.body;
  request
    .patch(`https://workout-tracker-pt2.auth0.com/api/v2/users/${user_id}`)
    .set('Authorization', 'Bearer ' + req.access_token)
    .send(update)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.send(403, '403 Forbidden');
      console.log(err);
    });
});

server.post('/api/userUpdate', checkJwt, (req, res) => {});

//ENDPOINT TO GET USER CATEGORIES AND EXERCISES
server.get('/api/users', checkJwt, (req, res) => {
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
<<<<<<< HEAD
<<<<<<< HEAD
      db("categories as c")
        .join("users as u", "u.id", "c.userId")
        .select("c.id", "c.categoryName")
        .whereIn("c.userId", [1, id.id])
        .pluck("c.id")
        .then(categories => {
          db("exercises as e")
            .join("categories as c", "c.id", "e.categoryId")
=======
      console.log(id);
      db('categories as c')
        .join('users as u', 'u.id', 'c.userId')
        .select('c.id', 'c.categoryName')
        .whereIn('c.userId', [1, id.id])
        .pluck('c.id')
        .then(categories => {
          console.log(categories);
          db('exercises as e')
            .join('categories as c', 'c.id', 'e.categoryId')
>>>>>>> added fetch premium action
=======
      console.log(id);
      db('categories as c')
        .join('users as u', 'u.id', 'c.userId')
        .select('c.id', 'c.categoryName')
        .whereIn('c.userId', [1, id.id])
        .pluck('c.id')
        .then(categories => {
          console.log(categories);
          db('exercises as e')
            .join('categories as c', 'c.id', 'e.categoryId')
>>>>>>> added fetch premium action
            .select(
              'e.id as excerciseId',
              'e.exerciseName as exercise',
              'c.id as categoryId',
              'c.categoryName as category'
            )
            .whereIn('e.categoryId', categories)
            .then(exercises => {
              checkForResource(req, res, exercises);
            })
            .catch(err => {
              console.log('error', err);
              res.status(500).json({
                error: 'The exercise information could not be retrieved.'
              });
            });
        })
        .catch(err => {
          console.log('error', err);
          res.status(500).json({
            error: 'The categories information could not be retrieved.'
          });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The specified user info could not be retrieved' });
    });
});

//ENDPOINT TO CREATE A USER

// server.post("/api/users", checkJwt, (req, res) => {
//   req.body.user_id = req.user.sub;
//   const user = req.body;
//   db("users")
//     .returning("id")
//     .insert(user)
//     .then(id => {
//       console.log(id);
//       db("categories as c")
//         .join("users as u", "u.id", "c.userId")
//         .select("c.id", "c.categoryName")
//         .whereIn("c.userId", [1, id[0]])
//         .pluck("c.id")
//         .then(categories => {
//           console.log(categories);
//           db("exercises as e")
//             .join("categories as c", "c.id", "e.categoryId")
//             .select(
//               "e.id",
//               "e.exerciseName as exercise",
//               "c.id",
//               "c.categoryName as category"
//             )
//             .whereIn("e.categoryId", categories)
//             .then(exercises => {
//               console.log(exercises);
//               checkForResource(req, res, exercises);
//             })
//             .catch(err => {
//               console.log("error", err);
//               res.status(500).json({
//                 error: "The exercise information could not be retrieved."
//               });
//             });
//         })
//         .catch(err => {
//           console.log("error", err);
//           res.status(500).json({
//             error: "The categories information could not be retrieved."
//           });
//         });
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.status(500).json({
//         error: "There was an error saving the user to the database."
//       });
//     });
// });

//ENDPOINT TO CREATE A USER V2

server.post('/api/users', checkJwt, (req, res) => {
  req.body.user_id = req.user.sub;
  const user = req.body;
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .then(rows => {
      if (rows.length === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
        db("users")
          .returning("id")
          .insert(user)
          .then(id => {
            db("categories as c")
              .join("users as u", "u.id", "c.userId")
              .select("c.id", "c.categoryName")
              .whereIn("c.userId", [1, id[0]])
              .pluck("c.id")
=======
        console.log('this is the row');
        console.log(rows);
        console.log('this is the user');
        console.log(user);
        db('users')
          .returning('id')
          .insert(user)
          .then(id => {
=======
        console.log('this is the row');
        console.log(rows);
        console.log('this is the user');
        console.log(user);
        db('users')
          .returning('id')
          .insert(user)
          .then(id => {
>>>>>>> added fetch premium action
            console.log('this is the id');
            console.log(id);
            db('categories as c')
              .join('users as u', 'u.id', 'c.userId')
              .select('c.id', 'c.categoryName')
              .whereIn('c.userId', [1, id[0]])
              .pluck('c.id')
<<<<<<< HEAD
>>>>>>> added fetch premium action
=======
>>>>>>> added fetch premium action
              .then(categories => {
                db('exercises as e')
                  .join('categories as c', 'c.id', 'e.categoryId')
                  .select(
                    'e.id',
                    'e.exerciseName as exercise',
                    'c.id',
                    'c.categoryName as category'
                  )
                  .whereIn('e.categoryId', categories)
                  .then(exercises => {
                    checkForResource(req, res, exercises);
                  })
                  .catch(err => {
                    console.log('error', err);
                    res.status(500).json({
                      error: 'The exercise information could not be retrieved.'
                    });
                  });
              })
              .catch(err => {
                console.log('error', err);
                res.status(500).json({
                  error: 'The categories information could not be retrieved.'
                });
              });
          })
          .catch(err => {
            console.log('error', err);
            res.status(500).json({
              error: 'There was an error saving the user to the database.'
            });
          });
      } else {
        db('users')
          .select('id')
          .where('user_id', req.user.sub)
          .first()
          .then(id => {
<<<<<<< HEAD
<<<<<<< HEAD
            db("categories as c")
              .join("users as u", "u.id", "c.userId")
              .select("c.id", "c.categoryName")
              .whereIn("c.userId", [1, id.id])
              .pluck("c.id")
              .then(categories => {
                db("exercises as e")
                  .join("categories as c", "c.id", "e.categoryId")
=======
            console.log(id);
            db('categories as c')
              .join('users as u', 'u.id', 'c.userId')
              .select('c.id', 'c.categoryName')
              .whereIn('c.userId', [1, id.id])
              .pluck('c.id')
              .then(categories => {
                console.log(categories);
                db('exercises as e')
                  .join('categories as c', 'c.id', 'e.categoryId')
>>>>>>> added fetch premium action
=======
            console.log(id);
            db('categories as c')
              .join('users as u', 'u.id', 'c.userId')
              .select('c.id', 'c.categoryName')
              .whereIn('c.userId', [1, id.id])
              .pluck('c.id')
              .then(categories => {
                console.log(categories);
                db('exercises as e')
                  .join('categories as c', 'c.id', 'e.categoryId')
>>>>>>> added fetch premium action
                  .select(
                    'e.id as excerciseId',
                    'e.exerciseName as exercise',
                    'c.id as categoryId',
                    'c.categoryName as category'
                  )
                  .whereIn('e.categoryId', categories)
                  .then(exercises => {
                    checkForResource(req, res, exercises);
                  })
                  .catch(err => {
                    console.log('error', err);
                    res.status(500).json({
                      error: 'The exercise information could not be retrieved.'
                    });
                  });
              })
              .catch(err => {
                console.log('error', err);
                res.status(500).json({
                  error: 'The categories information could not be retrieved.'
                });
              });
          })
          .catch(err => {
            res.status(500).json({
              error: 'The specified user info could not be retrieved'
            });
          });
      }
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The specified user info could not be retrieved' });
    });
});

//ENDPOINT TO GET USER FROM DB

server.get('/api/userid', checkJwt, (req, res) => {
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
      if (!id) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
        console.log('null');
>>>>>>> added fetch premium action
=======
        console.log('null');
>>>>>>> added fetch premium action
      } else {
        res.status(200).json(id.id);
      }
    })
    .catch(err => {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log("error", err);
=======
=======
>>>>>>> added fetch premium action
      console.log('error', err);
      console.log(id.id);
>>>>>>> added fetch premium action
      res
        .status(500)
        .json({ error: 'The specified user info could not be retrieved' });
    });
});

// ENDPOINT TO GET CATEGORIES

server.get('/api/categories', checkJwt, (req, res) => {
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
<<<<<<< HEAD
<<<<<<< HEAD
      db("categories as c")
        .orderBy("id")
        .join("users as u", "u.id", "c.userId")
        .select("c.id", "c.categoryName")
        .whereIn("c.userId", [1, id.id])
=======
=======
>>>>>>> added fetch premium action
      console.log(id);
      db('categories as c')
        .join('users as u', 'u.id', 'c.userId')
        .select('c.id', 'c.categoryName')
        .whereIn('c.userId', [1, id.id])
        .pluck('c.id')
<<<<<<< HEAD
>>>>>>> added fetch premium action
=======
>>>>>>> added fetch premium action
        .then(categories => {
          checkForResource(req, res, categories);
        })
        .catch(err => {
          console.log('error', err);
          res.status(500).json({
            error: 'The categories information could not be retrieved.'
          });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The specified user info could not be retrieved' });
    });
});

//ENDPOINT TO POST A NEW CATEGORY

server.post('/api/categories', checkJwt, (req, res) => {
  const { categoryName } = req.body;
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
      db('categories')
        .returning('userId')
        .insert({ categoryName: categoryName, userId: id.id })
        .then(userId => {
<<<<<<< HEAD
<<<<<<< HEAD
          db("categories as c")
            .orderBy("id")
            .join("users as u", "u.id", "c.userId")
            .select("c.id", "c.categoryName")
            .whereIn("c.userId", [1, userId[0]])
=======
=======
>>>>>>> added fetch premium action
          console.log(userId);
          db('categories as c')
            .join('users as u', 'u.id', 'c.userId')
            .select('c.id', 'c.categoryName')
            .whereIn('c.userId', [1, userId[0]])
<<<<<<< HEAD
>>>>>>> added fetch premium action
=======
>>>>>>> added fetch premium action
            .then(categories => {
              checkForResource(req, res, categories);
            })
            .catch(err => {
              console.log('error', err);
              res.status(500).json({
                error: 'The categories information could not be retrieved.'
              });
            });
        })
        .catch(err => {
          console.log('error', err);
          res
            .status(500)
            .json({ error: 'The user information could not be retrieved.' });
        });
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({
        error: 'There was an error saving the user to the database.'
      });
    });
});

//ENDPOINT TO POST A NEW EXERCISE

server.post('/api/exercises', checkJwt, (req, res) => {
  const { exerciseName, reps, weight, sets, categoryId } = req.body;
  //query user table to get user w req.user.sub
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
      db('exercises')
        .returning('categoryId')
        .insert({
          exerciseName: exerciseName,
          reps: reps,
          weight: weight,
          sets: sets,
          categoryId: categoryId,
          userId: id.id
        })
        .then(categoryId => {
          db('categories as c')
            .select('c.id', 'c.categoryName')
            .where('c.id', categoryId[0])
            .first()
            .then(category => {
              console.log("Category");
              console.log(category);
              db('exercises as e')
                .join('categories as c', 'c.id', 'e.categoryId')
                .select(
                  'e.id as excerciseId',
                  'e.exerciseName as exercise',
                  'c.id as categoryId',
                  'c.categoryName as category'
                )
                .where('e.categoryId', category.id)
                .then(exercises => {
                  console.log("Exercises:");
                  console.log(exercises);
                  checkForResource(req, res, exercises);
                })
                .catch(err => {
                  console.log('error', err);
                  res.status(500).json({
                    error: 'The exercise information could not be retrieved.'
                  });
                });
            })
            .catch(err => {
              console.log('error', err);
              res.status(500).json({
                error: 'The categories information could not be retrieved.'
              });
            });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The specified user info could not be retrieved' });
    });
});

//ENDPOINT TO POST A NEW PROGRESS NOTE

server.post('/api/notes', checkJwt, (req, res) => {
  const { weight, waist, arms } = req.body;
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
      db('notes')
        .returning('userId')
        .insert({
          weight: weight,
          waist: waist,
          arms: arms,
          userId: id.id
        })
        .then(userId => {
          console.log(userId);
          db('notes as n')
            .join('users as u', 'u.id', 'n.userId')
            .select('n.id', 'n.weight', 'n.waist', 'n.arms')
            .where('n.userId', userId[0])
            .then(notes => {
              checkForResource(req, res, notes);
            })
            .catch(err => {
              console.log('error', err);
              res.status(500).json({
                error: 'The notes information could not be retrieved.'
              });
            });
        })
        .catch(err => {
          console.log('error', err);
          res
            .status(500)
            .json({ error: 'The notes information could not be retrieved.' });
        });
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({
        error: 'The notes information could not be retrieved.'
      });
    });
});

//ENDPOINT TO GET PROGRESS NOTES

server.get('/api/notes', checkJwt, (req, res) => {
  db('users')
    .select('id')
    .where('user_id', req.user.sub)
    .first()
    .then(id => {
      db('notes as n')
        .join('users as u', 'u.id', 'n.userId')
        .select('n.id', 'n.weight', 'n.waist', 'n.arms')
        .where('n.userId', id.id)
        .then(notes => {
          checkForResource(req, res, notes);
        })
        .catch(err => {
          console.log('error', err);
          res.status(500).json({
            error: 'The notes information could not be retrieved.'
          });
        });
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The notes information could not be retrieved.' });
    });
});

// ENDPOINT TO UPDATE PREMIUM STATUS

server.get('/api/users/premium', checkJwt, (req, res) => {
  db('users')
    .where('user_id', req.user.sub)
    .first()
    .update({
      premium: true
    })
    .then(user => {
      checkForResource(req, res, user);
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).json({ error: 'Could not set user to premium.' });
    });
});

//WARNING, FOLLOWING ENDPOINT FOR TEST PURPOSES ONLY: GET ALL USERS CATEGORIES AND EXERCISES BY ID

server.get('/api/:id/categories', checkJwt, (req, res) => {
  const { id } = req.params;
  db('categories as c')
    .join('users as u', 'u.id', 'c.userId')
    .select('c.id', 'c.categoryName')
    .whereIn('c.userId', [1, id])
    .pluck('c.id')
    .then(categories => {
      console.log(categories);
      db('exercises as e')
        .join('categories as c', 'c.id', 'e.categoryId')
        .select(
          'e.id',
          'e.exerciseName as exercise',
          'c.id',
          'c.categoryName as category'
        )
        .whereIn('e.categoryId', categories)
        .then(exercises => {
          console.log(exercises);
          checkForResource(req, res, exercises);
        })
        .catch(err => {
          console.log('error', err);
          res.status(500).json({
            error: 'The exercise information could not be retrieved.'
          });
        });
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The categories information could not be retrieved.' });
    });
});

//ENDPOINTS BELOW NOT YET FUNCTIONAL AND/OR REDUNDANT

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
