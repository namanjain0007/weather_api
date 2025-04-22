const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("nj",process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    
    console.log("connection successfull to DB");
  } catch (error) {
    console.log("Databasee connection failed");
  }
};

module.exports = connectDb;
