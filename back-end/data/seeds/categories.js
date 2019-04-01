exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('categories').insert([
        { categoryName: 'Arms' },
        { categoryName: 'Chest' },
        { categoryName: 'Back' },
        { categoryName: 'Legs' },
        { categoryName: 'Abs' }
      ]);
    });
};
