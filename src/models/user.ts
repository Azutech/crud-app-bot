import mongoose from 'mongoose';

const { Schema } = mongoose;

const crudSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  Active: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('crud', crudSchema);
