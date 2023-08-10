const mongoose = require("mongoose");

//@DESC creating Category Schema Model

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shares: {
      type: Number,
      default: 0,
    },
    posts: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

// @DESC compile Schema to model

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
