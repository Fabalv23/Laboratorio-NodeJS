const http = require('http');
const url = require('url');
http.createServer(function (req, res) {


    if (req.url === '/') {

        res.write(JSON.stringify({ TITULO: 'VISTA PRINCIPAL' }));
        return res.end();
    }
    if (req.url === '/hello') {
        res.write(JSON.stringify({ TITULO: 'VISTA INTERMEDIA' }));
        return res.end();
    }
    if (url.parse(req.url).pathname.split('/').length === 3) {


        res.write(JSON.stringify({ "Hello": url.parse(req.url).pathname.split('/')[2] }));
        return res.end();
    }
    res.write(JSON.stringify({ ERROR: 'La ruta no se encuentra' }));
    return res.end();
}).listen(8080);
