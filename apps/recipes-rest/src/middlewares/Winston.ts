
import expressWinston from "express-winston";
import winston from "winston";

export function winstonLogger() {
    return expressWinston.logger({
        transports: [
            new winston.transports.Console()
        ],
        format: winston.format.combine(
            winston.format.json()
        ),
        meta: false,
        msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms",
        expressFormat: false,
        colorize: false
    });
}

export function winstonErrorLogger() {
    return expressWinston.errorLogger({
        transports: [
            new winston.transports.Console()
        ],
        format: winston.format.combine(
            winston.format.json()
        )
    });
}