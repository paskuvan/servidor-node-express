const getStatus = (req, res) => {
  res.json({ 
    status: "ok",
    message: "El servidor está funcionando correctamente",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())} segundos`
  });
};

module.exports = { getStatus };