import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
const User = model('User', UserSchema);
export default User;

// Define and export the helper functions
export const findUsers = async (query) => {
  return User.find(query);
};

export const createUser = async (data) => {
  const user = new User(data);
  return user.save();
};
