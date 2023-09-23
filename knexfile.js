// knexfile.js

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './students.db',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
      },
    },
  };
  