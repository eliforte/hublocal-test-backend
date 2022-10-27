import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const app = new App();
const corsOptions = { origin: [`${process.env.PROD_CLIENT}`, 'http://localhost:3000'] };

app.useCors(corsOptions);

export default app;
