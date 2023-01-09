import mongoose from 'mongoose';

const { Schema } = mongoose;

const crudSchema = new Schema({
  firstName: {
    type: String, required: true
  },
  lastName: {
    type: String, required: true
  },
  email: {type: String, required: true},
  password: {type: String, required: true},
  Active: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('crud', crudSchema);
