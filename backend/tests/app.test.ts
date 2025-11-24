import request from 'supertest';
import { app } from '../src/app';
import { describe, it, expect } from '@jest/globals';

describe('GET /', () => {
  it('returns Hello response', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello from Winston Logging!');
  });
});
