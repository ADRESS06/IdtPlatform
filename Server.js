const http = require('http')
const fs = require('fs')
const host = '127.0.0.1'
const puerto = 3000


const Server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404)
            res.write('Tenemos problemas tegnicos, porfavor comunicate con ADRESS o Sxssxn')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})


Server.listen(puerto, host, () => {
    console.log('Hola soy el Servidos de ADRESS y Sassan, estoy funcionando en', host, puerto)
})

