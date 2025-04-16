import  { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: string,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const User = model("User", userSchema);


