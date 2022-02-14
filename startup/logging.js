require("express-async-errors");
const winston = require("winston");

module.exports = function () {
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.exceptions.handle(
    new winston.transports.File({ filename: "exceptions.log" })
  );

  winston.add(new winston.transports.File({ filename: "logfile.log" }));

  if (process.env.NODE_ENV !== "production") {
    winston.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
};
