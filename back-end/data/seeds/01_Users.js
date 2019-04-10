exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: "Test User 1"
        },
        {
          user_id: "Test User 2"
        },
        {
          user_id: "Test User 3"
        }
      ]);
    });
};
