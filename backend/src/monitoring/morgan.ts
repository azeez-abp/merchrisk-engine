import morgan from 'morgan';
//import { logger } from './winston'
import { accessLogStream } from './logger';

// Morgan stream for Winston
// http request logs
export const morganMiddleware = morgan('combined', {
  stream: accessLogStream,
});
