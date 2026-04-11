# Node & Express Web App 🚀

Proyecto backend desarrollado con **Node.js** y **Express** como parte de la evaluación del módulo 6, 7 y 8.

---

## Requisitos del sistema

- Node.js v18 o superior
- npm v8 o superior

---

## Instalación

1. Cloná el repositorio:
```bash
git clone https://github.com/tu-usuario/node-express-app.git
cd node-express-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea el archivo `.env` en la raíz del proyecto:
```
PORT=3000
```

---

## Ejecución

**Modo desarrollo** (con recarga automática usando nodemon):
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

---

## Rutas disponibles

| Ruta | Método | Descripción | Respuesta |
|------|--------|-------------|-----------|
| `/` | GET | Página de bienvenida | HTML |
| `/status` | GET | Estado del servidor | JSON |

---

## Estructura del proyecto

```
node-express-app/
├── index.js              → Archivo principal del servidor
├── package.json          → Configuración del proyecto y scripts
├── .env                  → Variables de entorno (no se sube a GitHub)
├── .gitignore
├── routes/
│   └── router.js         → Definición de rutas con Express Router
├── controllers/
│   ├── homeController.js → Lógica de la ruta "/"
│   └── statusController.js → Lógica de la ruta "/status"
├── middlewares/
│   └── logger.js         → Middleware que registra cada acceso en log.txt
├── services/
│   └── logService.js     → Función reutilizable para escribir en archivos planos
├── public/
│   └── styles.css        → Archivos estáticos servidos por Express
└── logs/
    └── log.txt           → Registro automático de accesos (generado en runtime)
```
