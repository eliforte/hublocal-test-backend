import dotenv from 'dotenv';
import App from './app';
import LoginRouter from '../routes/loginRoute';
import UserRouter from '../routes/userRoute';
import CompanyRouter from '../routes/companyRoute';
import PlaceRouter from '../routes/placeRoute';
import TicketRouter from '../routes/ticketRoute';
import ResponsibleRouter from '../routes/responsibleRoute';
import ErrorHandler from '../middlewares/errors';

dotenv.config();

const app = new App();
const corsOptions = {
  origin: ['*']
};

app.useCors(corsOptions);
app.newRoutes(new UserRouter().router);
app.newRoutes(new LoginRouter().router);
app.newRoutes(new CompanyRouter().router);
app.newRoutes(new PlaceRouter().router);
app.newRoutes(new TicketRouter().router);
app.newRoutes(new ResponsibleRouter().router);

app.errorHandler(ErrorHandler.handler);

export default app;
