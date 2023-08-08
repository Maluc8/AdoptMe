import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: "http" }),
    new winston.transports.File({
      filename: `../logs/errors.log`,
      level: `warn`,
    }),
  ],
});

export const myLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.http(
    `${req.method} on ${req.url} - ${new Date().toLocaleTimeString()}`
  );
  next();
};
