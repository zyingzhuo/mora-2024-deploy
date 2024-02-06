const {
  db: { username, password, database, host },
} = require("./index");


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true, // Enforce SSL/TLS connections
        rejectUnauthorized: false, // Optional: Disable certificate validation for development (not recommended for production)
      },
    },
  },
};
