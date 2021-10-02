import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

const app: Application = express()

dotenv.config()
const port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000

app.get('/toto', (req: Request, res: Response) => {
    res.send('Hello toto')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})