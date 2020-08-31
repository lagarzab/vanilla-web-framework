const http = require('http')
const PORT = 3333

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World!')
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})