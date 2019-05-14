exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    table
      .integer('categoryId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories');
    table.timestamp('start', { useTz: false }).notNullable();
    table.timestamp('end', { useTz: false }).notNullable();
    table.boolean('allDay').defaultTo(false);
    table.json('exercises');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
