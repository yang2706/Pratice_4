import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger);

// Routes
app.use('/users', userRoutes);

export default app;