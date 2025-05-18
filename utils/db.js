const mongoose = require("mongoose");
const db_connect = async () => {
  try {
    if (process.env.mode === "production") {
      await mongoose.connect(process.env.db_production_url);
      console.log("Production database connect");
    } else {
      console.log("Attempting to connect to local database...");
      console.log("Connection URL:", process.env.db_local_url);
      await mongoose.connect(process.env.db_local_url);
      console.log("Local database connected successfully!");

      // Test the connection by listing collections
      const collections = await mongoose.connection.db
        .listCollections()
        .toArray();
      console.log(
        "Available collections:",
        collections.map((c) => c.name)
      );
    }
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = db_connect;
