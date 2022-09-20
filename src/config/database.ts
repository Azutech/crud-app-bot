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

const database = async () => {
  await mongoose.connect(uri, connectionParams as ConnectionOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default database;
