exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "nigel@email.com",
          password: "dorwssap"
        },
        {
          email: "nakaz@email.com",
          password: "password1"
        },
        {
          email: "jaywon@email.com",
          password: "password123"
        }
      ]);
    });
};
