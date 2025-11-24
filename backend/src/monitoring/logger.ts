import path from 'path';
import fs from 'fs';
import * as rfs from 'rotating-file-stream';

// ensure log directory exists
const logDirectory = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// create a rotating write stream
export const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory,
});
