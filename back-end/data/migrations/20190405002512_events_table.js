exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", function(table) {
    table.increments();
    table
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .integer("categoryId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories");
    table
      .string("category")
      .notNullable()
      .references("categoryName")
      .inTable("categories");
    table.date("start").notNullable();
    table.date("end")
    table.boolean("allDay").notNullable();
    table.string("title").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
