
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const mongoose = require("mongoose");

const uri = "mongodb+srv://bhavinParmar:HhqYlrYuY4ENrtKh@cluster0.rajlarn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.once("open", () => {
  console.log("Database Connected Successfully!!!...");
});
