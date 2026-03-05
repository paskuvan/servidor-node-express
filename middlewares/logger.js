const fs = require("fs");
const path = require("path");

const loggerMiddleware = (req, res, next) => {
  const now = new Date();
  const fecha = now.toLocaleDateString("es-CL");
  const hora = now.toLocaleTimeString("es-CL");

  const logLine = `[${fecha} ${hora}] - Ruta accedida: ${req.method} ${req.url}\n`;

  fs.appendFile(logPath, logLine, (err) => {
    if (err) {
      console.error("Error al escribir en el log:", err);
    }
  });

  next();
};

module.exports = loggerMiddleware;