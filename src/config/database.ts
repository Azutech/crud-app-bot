import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ConnectionOptions } from 'tls';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
dotenv.config();

// const uri = 'mongodb+srv://azudev:<password>@cluster0.5rbg3lj.mongodb.net/test';
const uri = process.env.MONGODB_URI as string;
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,

};

const connectDB = async () => {
  try {
    await mongoose.connect(uri, connectionParams as ConnectionOptions);
  } catch (err) {
    console.error(err);
  }
};

mongoose.connection.once('open', () => {
  console.log('connected to MongoDB');
});

export default connectDB;
