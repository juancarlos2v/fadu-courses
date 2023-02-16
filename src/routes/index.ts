import { Request, Response, Router } from "express";

const router = Router();
const uRouter = Router();

uRouter.get("/all", (req: Request, res: Response) => {
    res.send("Alumnos")
})
uRouter.use("/student", router)

export default uRouter;