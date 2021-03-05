const http = require('http');
const url = require('url');
http.createServer(function (req, res) {

    if (req.url === '/') {
        res.write('Ahora te encuentras en el Home "/"');
        return res.end();
    }
    if (req.url === '/hello') {
        res.write('Ahora te encuentras en la ruta de hello');
        return res.end();
    }
    if (req.url === '/hello/:nombre') {
        let email = req.params.nombre;
        console.log(email)
        res.write('Ahora te encuentras en la ruta de hello');
        return res.end();
    }
    res.write('Mensaje generico cuando la ruta no se encuentra especificada');
    return res.end();
}).listen(8080);
