const { Pool } = require("pg");
const pool = new Pool({
	host: "db",
	port: 5432,
	user: "localvideos",
	password: "localvideos",
	database: "localvideos-database",
});

module.exports = pool;
