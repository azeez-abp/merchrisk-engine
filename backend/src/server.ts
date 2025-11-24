import express, { Request, Response } from 'express'

import { morganMiddleware } from './monitoring/morgan'
import { logger } from './monitoring/winston'


const app = express()
app.use(express.json())




app.use(express.json())

// Morgan → Winston
app.use(morganMiddleware)

// Example: log manually
app.get('/', (req, res) => {
  logger.info('Root endpoint hit')
  res.send('Hello from Winston Logging!')
})

app.use((err: any, req: any, res: any, next: any) => {
  logger.error(err.message)
  res.status(500).send('Internal server error')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
