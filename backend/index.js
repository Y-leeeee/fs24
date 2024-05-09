const express = require("express"),
  path = require("path");
cors = require("cors");
const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static(path.join(path.resolve(), "dist")));

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM cities WHERE name = $1", [
    "Stockholm",
  ]);
  response.json(rows); // Send the query results back as JSON
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
