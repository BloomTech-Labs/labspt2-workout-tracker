exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments();
    //small character limits
    table.integer('weight').notNullable();
    table.integer('waist');
    table.integer('arms');
    table.integer('notes_id').unsigned();

    // uncomment, save, and knex migrate:latest when ready:
    // table
    //  .foreign('user_id);
    //  .references('id);
    //  .inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
