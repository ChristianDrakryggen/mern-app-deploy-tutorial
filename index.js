const express = require("express");
app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/mern-app-tutorial-db",
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => {
    console.log("connected to db");
  }
);

const router = require("./routes/API");
app.use("/api", router);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "frontend/build")));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
