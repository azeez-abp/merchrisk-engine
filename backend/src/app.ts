import express, { Request, Response } from 'express';
import { morganMiddleware } from './monitoring/morgan';
import { logger } from './monitoring/winston';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
export const app = express();


app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
});

app.use(limiter);
// Morgan → Winston
app.use(morganMiddleware);
app.use(express.json());
// Sample route
app.get('/', (req: Request, res: Response) => {
  logger.info('Root endpoint hit');
  res.send('Hello from Winston Logging!');
});

// Global error handler
app.use(
  (
    err: Error,
    req: Request,
    res: Response
    //next: NextFunction
  ) => {
    logger.error(err.message);
    res.status(500).send('Internal server error');
  }
);
