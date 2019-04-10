exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          exerciseName: "Lowbar Squats",
          reps: "5",
          weight: "200 lbs",
          sets: "5",
          categoryId: 1,
          userId: 1
        },
        {
          exerciseName: "Lunges",
          reps: "6",
          weight: "150 lbs",
          sets: "4",
          categoryId: 1,
          userId: 1
        },
        {
          exerciseName: "Bicep Curls",
          reps: "5",
          weight: "100 lbs",
          sets: "5",
          categoryId: 2,
          userId: 1
        },
        {
          exerciseName: "Preacher Curls",
          reps: "4",
          weight: "100 lbs",
          sets: "4",
          categoryId: 2,
          userId: 1
        }
      ]);
    });
};
