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
    const restaraunts = await pool.query("SELECT * FROM restaraunts");
    res.json(restaraunts.rows);
  } catch (err) {
    console.log(err);
  }
});
//Create restaraunts
app.post("/restaurants", async (req, res) => {
  try {
    const { name, price_range } = req.body;
    const newRestaraunt = await pool.query(
      `INSERT INTO restaraunts (name,price_range) VALUES ($1,$2) RETURNING *`,
      [name, price_range]
    );
    res.json(newRestaraunt.rows);
  } catch (err) {
    console.log(err);
  }
});
//Get restaraunt by id
app.get("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaraunt = await pool.query(
      `SELECT * FROM restaraunts WHERE id=$1`,
      [id]
    );
    res.json(restaraunt.rows);
  } catch (err) {
    console.log(err);
  }
});

//Delete restaraunt by id
app.delete("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM restaraunts WHERE id=$1`, [id]);
    res.json({ response: "Deleted succsesfully" });
  } catch (err) {
    console.log(err);
  }
});
//Update restaraunt
app.put("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price_range } = req.body;
    await pool.query(
      `UPDATE restaraunts SET name=$1, price_range=$2  WHERE id=$3`,
      [name, price_range, id]
    );
    res.json("UPDATED");
  } catch (err) {
    console.log(err);
  }
});
