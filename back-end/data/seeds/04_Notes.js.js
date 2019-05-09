exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        { weight: 21, waist: 22, arms: 23, legs: 13, userId: 1 },
        { weight: 21, waist: 22, arms: 23, legs: 14, userId: 1 },
        { weight: 21, waist: 22, arms: 23, legs: 14, userId: 1 },
        { weight: 21, waist: 22, arms: 23, legs: 14, userId: 1 },
        { weight: 21, waist: 22, arms: 23, legs: 14, userId: 1 }
      ]);
    });
};
