const express = require("express");
const pool = require("./db");
const port = 3000;

const app = express();

app.use(express.json());

console.log(pool); // Verify the pool object

// routes
app.get("/", async (request, response) => {
	try {
		const data = await pool.query("SELECT * FROM videos");
		response.status(200).send(data.rows);
	} catch (error) {
		console.log("error ==>", error);
		response.sendStatus(500);
	}
});

app.post("/", async (request, response) => {
	const { name, location } = request.body;
	try {
		await pool.query("INSERT INTO videos (name, address) VALUES ($1, $2)", [
			name,
			location,
		]);
		response.status(200).send({ message: "successfully added video" });
	} catch (error) {
		console.log("error ==>", error);
		response.sendStatus(500);
	}
});

app.get("/setup", async (request, response) => {
	try {
		await pool.query(
			"CREATE TABLE videos (id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))"
		);
		response.status(200).send({ message: "successfully created videos table" });
	} catch (error) {
		console.log("error ==>", error);
		response.sendStatus(500);
	}
});

app.listen(port, () => console.log(`server has started: ${port}`));
