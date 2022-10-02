const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "man1234",
  port: 5432,
  host: "localhost",
  database: "taskmanage"
})

module.exports = pool;