import { Router } from "express";

export default class HealthCheckerController {
    private path = "/health";
    router: Router = Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.get(`${this.path}/`, async (_, res) => {
            res.statusCode = 200;
            res.send({
                sucess: true,
                message: "Container is up and accepting requests"
            });
        });
    }
}
