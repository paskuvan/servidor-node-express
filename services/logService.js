const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../logs/log.txt");

const appendLog = (mensaje) => {
  const now = new Date();
  const fecha = now.toLocaleDateString("es-CL");
  const hora = now.toLocaleTimeString("es-CL");

  const linea = `[${fecha} ${hora}] ${mensaje}\n`;

  fs.appendFile(logPath, linea, (err) => {
    if (err) console.error("Error al guardar el log:", err);
  });
};

module.exports = { appendLog };