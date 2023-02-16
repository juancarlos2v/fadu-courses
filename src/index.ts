import express, { Express, Request, Response } from "express";
import config from "./config";

const app: Express = express();
const port: Number | String = config.server.port || 3000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hi!")
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);

})