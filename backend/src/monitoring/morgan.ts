import morgan from 'morgan'
import { logger } from './winston'

// Morgan stream for Winston
export const morganMiddleware = morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
})
