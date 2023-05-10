import express, { Express } from 'express';
import config from './config';
import homeRoutes from './routes/home.routes';

const app: Express = express();
const port: string = config.PORT;

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', homeRoutes);
