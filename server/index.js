const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const pool = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is runnig on port ${port}`);
});
//Get all restaraunts
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await pool.query("SELECT * FROM restaurants");
    res.json(restaurants.rows);
  } catch (err) {
    console.log(err);
  }
});
//Create restaurants
app.post("/restaurants", async (req, res) => {
  try {
    const { name, price_range, location } = req.body;
    const newRestaurant = await pool.query(
      "INSERT INTO restaurants (name,price_range,location) VALUES ($1,$2,$3) RETURNING *",
      [name, price_range, location]
    );
    res.json(newRestaurant.rows);
  } catch (err) {
    console.log(err);
  }
});
//Get restaurants by id
app.get("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await pool.query(
      "SELECT * FROM restaurants WHERE id=$1",
      [id]
    );
    res.json(restaurants.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//Delete restaurants by id

app.delete("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM restaurants WHERE id=$1", [id]);
    res.json({ response: "Deleted succsesfully" });
  } catch (err) {
    console.log(err);
  }
});

//Update restaurants
app.put("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price_range, location } = req.body;
    await pool.query(
      "UPDATE restaurants SET name=$1, price_range=$2 , location = $3 WHERE id=$4",
      [name, price_range, location, id]
    );
    res.json("UPDATED");
  } catch (err) {
    console.log(err);
  }
});
