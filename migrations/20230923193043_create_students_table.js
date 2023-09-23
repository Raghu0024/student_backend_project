// migrations/20230917123456_create_students_table.js

exports.up = function (knex) {
    return knex.schema.createTable('students', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('students');
  };
  