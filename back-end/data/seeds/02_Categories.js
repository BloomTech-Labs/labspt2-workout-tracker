exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { categoryName: "Glutes", userId: 1 },
        { categoryName: "Arms", userId: 1 },
        { categoryName: "Glutes", userId: 2 },
        { categoryName: "Legs", userId: 2 },
        { categoryName: "Glutes", userId: 3 },
        { categoryName: "Arms", userId: 3 },
        { categoryName: "Legs", userId: 3 }
      ]);
    });
};
