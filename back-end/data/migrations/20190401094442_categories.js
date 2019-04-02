exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments();
    table
      .string('categoryName')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories');
};
