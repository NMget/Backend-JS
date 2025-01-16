const http = require("http");

const server = http.createServer (function(req, res) {
// A l'arrivée d'une requête
console.log("Serveur running at http://127.0.0.1:8081/");
res.write("Hello World!");
res.end();
})

// Lancer le serveur (en écoute au port 8081)
server.listen(8081)