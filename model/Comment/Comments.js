const mongoose = require("mongoose");

//@DESC creating Category Schema Model

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, 
        required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" ,required :true},
  },
  { timestamps: true }
);

// @DESC compile Schema to model

const Comment = mongoose.model("Comment", closedommentSchema);

module.exports = Comment;
