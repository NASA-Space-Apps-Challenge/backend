import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Socket, Server } from 'socket.io'


const app: Application = express()
const httpserver = createServer(app)
const io = new Server(httpserver)

dotenv.config()
const port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000

io.on("connection", (socket: Socket) => {
    console.log("New connection")
})

httpserver.listen(port, () => {
    console.log(`App is listening on port ${port} !`)
})