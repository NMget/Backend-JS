const http = require("http");
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

const swaggerGeneration = {
    swaggerGeneration: {
        openapi: "3.0.0",
        info : {
            title: 'anApi',
            version: "0.1.0"
        },
        servers: [
            {
                url: "http://localhost:8081/api/v1",
            },
        ],
    },
    apis: ['src/routes/*.js']
}
const server = http.createServer (function(req, res) {
// A l'arrivée d'une requête
console.log("Serveur running at http://127.0.0.1:8081/");
res.end();
})

// Lancer le serveur (en écoute au port 8081)
server.listen(8081)