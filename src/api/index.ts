import dotenv from 'dotenv';
import App from './app';
import LoginRouter from '../routes/loginRoute';
import UserRouter from '../routes/userRoute';
import ErrorHandler from '../middlewares/errors';

dotenv.config();

const app = new App();
const corsOptions = { origin: [`${process.env.PROD_CLIENT}`, 'http://localhost:3000', 'http://localhost:9090'] };

app.useCors(corsOptions);
app.newRoutes(new UserRouter().router);
app.newRoutes(new LoginRouter().router);

app.errorHandler(ErrorHandler.handler);

export default app;
