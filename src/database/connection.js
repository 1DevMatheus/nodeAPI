const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://matheusDev:hEfwZMxtVAN3zTXT@cluster0.0mbb7x7.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database server connected");
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

module.exports = main;
