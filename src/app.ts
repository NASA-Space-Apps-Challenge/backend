import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import axios from 'axios';
import cors from 'cors'



const app: Application = express()
app.use(cors())

dotenv.config()
const port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000

app.get("/", async (_req: Request, res: Response) => {
    let data: string = await axios.get("https://celestrak.com/NORAD/elements/active.txt").then(
        response => response.data
    )

    let clean_data = data
        .split(/\r?\n/)
        .reduce((r: any[], e, i: number) => (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r, [])
        .map(x => {
            x[0] = x[0].trim()
            return x
        })
        .filter(arr => arr.length === 3)
    console.info(clean_data.slice(-2))
    res.send(clean_data)
})


app.listen(port, () => {
    console.log(`App is listening on port ${port} !`)
})