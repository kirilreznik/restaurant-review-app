const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const port = process.env.PORT;
const cors = require("cors");
const pool = require("./db");
const jwtGenerator = require("./utils/jwtGenerator");
const app = express();
const authorization = require("./middleware/authorization");
const validation = require("./middleware/validation");
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
/////REGISTER USER
app.post("/register", validation, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      res.status(401).send("User already exists");
    } else {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);
      const newUser = await pool.query(
        "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
        [name, email, bcryptPassword]
      );
      const token = jwtGenerator(newUser.rows[0].user_id);
      res.json(token);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

////LOGIN USER

app.post("/login", validation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (foundUser.rows.length === 0) {
      res.status(401).send("User not found");
    } else {
      const validPassword = await bcrypt.compare(
        password,
        foundUser.rows[0].user_password
      );
      if (validPassword) {
        const token = jwtGenerator(foundUser.rows[0].user_id);
        res.json(token);
      } else {
        return res.status(401).send("Incorrect password");
      }
    }
  } catch (err) {
    console.log(err.message);
  }
});

///VERIFY JWToken

app.get("/is-verified", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

/// GET REVIEWS BY USER
app.get("/my-reviews", authorization, async (req, res) => {
  try {
    const userReviews = await pool.query(
      "SELECT * FROM reviews WHERE reviewer_id = $1",
      [req.user]
    );
    res.json(userReviews.rows);
  } catch (err) {
    console.log(error.message);
  }
});
