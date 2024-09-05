const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgresql://kprusty:0rp2VHcb5rSJUOLmj1jR181wdTHHoUc0@dpg-crcsggij1k6c73csq4jg-a.oregon-postgres.render.com/capstone_movies",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false // This allows connections without a certificate check.
      },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false // This allows connections without a certificate check.
      },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
