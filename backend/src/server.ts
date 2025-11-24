//import express, { Request, Response, NextFunction } from 'express';
// import { morganMiddleware } from './monitoring/morgan';
// import { logger } from './monitoring/winston';
import { app } from './app';
console.log('[sertver.ts module]', module);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
