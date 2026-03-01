const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to database");
  }
});


// 1️⃣ Add new student
app.post("/students", (req, res) => {
  const { name, email, course } = req.body;
  const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";
  db.query(sql, [name, email, course], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student added successfully" });
  });
});


// 2️⃣ Get all students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});


// 3️⃣ Get student by ID
app.get("/students/:id", (req, res) => {
  db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});


// 4️⃣ Update student
app.put("/students/:id", (req, res) => {
  const { name, email, course } = req.body;
  const sql = "UPDATE students SET name=?, email=?, course=? WHERE id=?";
  db.query(sql, [name, email, course, req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student updated successfully" });
  });
});


// 5️⃣ Delete student
app.delete("/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student deleted successfully" });
  });
});


app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});