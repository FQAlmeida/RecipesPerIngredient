import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hello World",
            version: "1.0.0",
        },
    },
    apis: fs.readdirSync(path.resolve(__dirname, "..", "controllers")),
};
const swaggerSpec = swaggerJSDoc(options);

const swaggerMiddleware = {
    serve: swaggerUi.serve,
    setup: () => swaggerUi.setup(swaggerSpec, { explorer: true })
};

export default swaggerMiddleware;
