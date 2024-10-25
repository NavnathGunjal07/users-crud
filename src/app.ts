import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import connectDB from './config/db.config';

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;
