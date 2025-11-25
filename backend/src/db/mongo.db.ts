import mongoose from 'mongoose';
import { dbConfig } from '../config/db.config';
import { logger } from '../monitoring/winston';

let retryCount: number = 0;
let timeout: NodeJS.Timeout | null = null;
export async function connectMongo() {
  try {
    await mongoose.connect(dbConfig.mongoURI as string, {
      autoIndex: false, // recommended for prod (indexes created manually)
      maxPoolSize: 20, // connection pool
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      heartbeatFrequencyMS: 10000,
      retryWrites: true,
      tls: process.env.MONGO_TLS === 'true',
    });
    return true;
  } catch (err) {
    retryCount++;
    // console.error("🔴 MongoDB connection error:", err);
    logger.error('🔴 MongoDB connection error:', err);
    if (retryCount < 10) {
      timeout = setTimeout(connectMongo, 5000); // retry
    }
    if (timeout) clearTimeout(timeout);
    return false;
  }
}

// gracefully close on SIGTERM
process.on('SIGINT', async () => {
  if (timeout) clearTimeout(timeout);
  await mongoose.connection.close();
  process.exit(0);
});
