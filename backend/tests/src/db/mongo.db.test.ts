import { describe, it, expect, beforeAll, afterAll, afterEach, jest } from '@jest/globals';
import mongoose from 'mongoose';
import { connectMongo } from '../../../src/db/mongo.db';
import { dbConfig } from '../../../src/config/db.config';

// Increase default timeout for all tests in this file
jest.setTimeout(30000); // 30 seconds
const env = process.env.NODE_ENV as string
// (isCI ? describe.skip : describe)('connectMongo() – DEV Only', () => {
//   // tests here...
// });
( (!env || env==='production') ? describe.skip : describe)('connectMongo() – DEV Only', () => {
  // tests here...

let mongo: any;

describe('connectMongo() – DEV Only', () => {
  beforeAll(async () => {
   
    if (env !== 'development') return;

    // Dynamically import MongoMemoryServer
    const { MongoMemoryServer } = await import('mongodb-memory-server');

    // Start the in-memory server (can take some time)
    mongo = await MongoMemoryServer.create();

    // Inject URI into dbConfig
    dbConfig.mongoURI = mongo.getUri();
  });

  afterEach(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect(); // Ensure fresh connection per test
    }
  });

  afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    if (mongo) await mongo.stop();
  });

  it('Should successfully connect using connectMongo()', async () => {
    const result = await connectMongo();
    expect(result).toBe(true);
    expect(mongoose.connection.readyState).toBe(1);
  });

  it('Should fail when URI is invalid', async () => {
    dbConfig.mongoURI = 'mongodb://127.0.0.1:9999'; // invalid port
    const result = await connectMongo();
    expect(result).toBe(false);
  });
});
});