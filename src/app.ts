import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Uncomment if needed for serving static files
// app.use(express.static(join(__dirname, 'public')));

// Use centralized routes
app.use(routes);

export default app;
