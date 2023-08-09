const mongoose = require("mongoose");

// @DESC  Creating User Schema Model

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now(),
  },

  isVerified: {
    type: String,
    default: "false",
  },
  accountLevel: {
    type: String,
    enum: ["bronze", "silver", "gold"],
    default: "bronze",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverImage: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  notificationPreferences : {
    email:{type:String,default:true}
  },
  gender:{
    type:String
    ,
    enum: ["Male","Female","Prefer Not to say"]
  },
  profileViewer: [{
    type: mongoose.Schema.Types.ObjectId, ref:'User'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId, ref:'User'
  }],
  blockedUsers: [{
    type: mongoose.Schema.Types.ObjectId, ref:'User'
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId, ref:'Post'
  }],
  likedPosts: [{
    type: mongoose.Schema.Types.ObjectId, ref:'Post'
  }],
  passwordResetToken:{
    type:String
  },
  passwordResetExpires:{
    type:Date,
  },
  accountVerificationToken : {
    type:String,
  },
  acountVerificationExpires : {
    type: Date,
  },
  
  
  },{
    timestamps: true // creates corresponding timestamp fields: createdAt and updatedAt
  });

// @DESC compile schema to model

const User = mongoose.model("User",UserSchema);

module.exports = User;