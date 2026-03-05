const getHomePage = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Node & Express App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="container">
          <h1>¡Bienvenido al servidor!</h1>
          <p>Aplicación backend con <strong>Node.js</strong> y <strong>Express</strong></p>
          <a href="/status">Ver estado del servidor →</a>
        </div>
      </body>
    </html>
  `);
};

module.exports = { getHomePage };