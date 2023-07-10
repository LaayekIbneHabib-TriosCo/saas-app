const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
const dbURI = process.env.MDB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const myDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  industry: String,
});

const MyData = mongoose.model("MyData", myDataSchema);

app.post("/api/clients", (req, res) => {
  const { name, email, phone, industry } = req.body;
  const newData = new MyData({ name, email, phone, industry });

  newData
    .save()
    .then(() => {
      console.log("Data saved successfully");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.sendStatus(500);
    });
});

app.get("/api/data", (req, res) => {
  MyData.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error("Error retrieving data:", err);
      res.sendStatus(500);
    });
});

// -----------------------------------------------------END------------------------------------------------------- //
