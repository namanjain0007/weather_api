const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const connectDb = require("./utils/db");

const app = express();

const router = require("./router/auth-router");

app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: "https://weather-epuf.onrender.com", 
  })
);

app.use("/api", router);
const PORT = process.env.PORT;
// connectDb().then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// );
