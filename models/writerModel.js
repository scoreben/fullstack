const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const writerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Politics",
        "Technology",
        "Sports",
        "Entertainment",
        "Education",
        "Other",
      ],
    },
    role: {
      type: String,
      default: "writer",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
writerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
writerSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("Writer", writerSchema);
