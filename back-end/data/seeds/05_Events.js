
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, userId: 1, categoryId: 1, category: 'Arms', exercises: {}, start: "'2019-11-21T10:15:00", end: "'2019-11-21T10:30:00", allDay: false, title: "Curls" },
        {id: 2, userId: 1, categoryId: 1, category: 'Arms', exercises: {}, start: "'2019-11-21T10:15:00", end: "'2019-11-21T10:30:00", allDay: false, title: "Arm" },
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};