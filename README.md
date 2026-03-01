# Student Management API

## 📌 Project Description
This is a simple Student CRUD API built using Node.js, Express, and MySQL.

---

## 🛠 How to Install

1. Install Node.js
2. Install MySQL
3. Install Git
4. Clone the repository:
   git clone <your-repository-link>

5. Install dependencies:
   npm install

---

## 🗄 Database Setup

1. Open MySQL
2. Create database:

   CREATE DATABASE student_management;

3. Use database:

   USE student_management;

4. Create table:

   CREATE TABLE students (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100),
     course VARCHAR(100)
   );

---

## ▶ How to Run

1. Start MySQL
2. Update .env file with your database details
3. Run command:

   node index.js

4. Server runs at:

   http://localhost:5000

---

## 📮 Sample API Requests

### Add Student (POST)
URL:
http://localhost:5000/students

Body (JSON):
{
  "name": "John",
  "email": "john@gmail.com",
  "course": "BCA"
}

---

### Get All Students (GET)
http://localhost:5000/students

---

### Update Student (PUT)
http://localhost:5000/students/1

---

### Delete Student (DELETE)
http://localhost:5000/students/1