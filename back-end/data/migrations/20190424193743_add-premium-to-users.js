exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table
      .boolean('premium')
      .notNull()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('premium');
  });
};
