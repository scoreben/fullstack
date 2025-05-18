const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authModel = require("../models/authModel");
require("dotenv").config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.db_local_url);
    console.log("Connected to database");

    // Check if admin already exists
    const existingAdmin = await authModel.findOne({ email: "admin@admin.com" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const admin = new authModel({
      name: "Admin",
      email: "admin@admin.com",
      password: hashedPassword,
      role: "admin",
      category: "Admin",
    });

    await admin.save();
    console.log("Admin user created successfully");
    console.log("Email: admin@admin.com");
    console.log("Password: admin123");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
