import dotenv from 'dotenv';
import app from '.';

dotenv.config();

app.server(process.env.PORT || 5050);
