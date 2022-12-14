import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  console.log('Error to get ports');
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// app.use(helmet());
// app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Send message for default URL
app.get('/', (req: Request, res: Response) => res.send('Welcome to NodeJs App using TypeScript'));

export default server;
