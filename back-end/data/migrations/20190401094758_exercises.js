exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments();
    table
      .string('exerciseName')
      .notNullable()
      .unique();
    table.string('reps').notNullable();
    table.string('weight').notNullable();
    table.string('sets').notNullable();
    table.integer('category_id').unsigned();

    table
      .foreign('category_id')
      .references('id')
      .inTable('categories');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercises');
};
