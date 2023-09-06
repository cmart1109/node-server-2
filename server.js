
const tareas = require("./tareas");
const http = require("http");
const port = 8080;
const host = 'localhost';

const server = http.createServer((req,res) => {
    if (req.method==='GET'&&req.url==="/tareas") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(tareas.info));
    }
    else { res.statusCode = 404
        res.end("URL no encontrada")
    }; 
    });

    server.listen(port,host, ()=>{
        console.log('El Servidor arranco adecuadamente');
    });
