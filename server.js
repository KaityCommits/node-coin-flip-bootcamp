const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
    const page = url.parse(request.url).pathname
    const params = querystring.parse(url.parse(request.url).query)

    if(page === '/')
        fs.readFile('coin-flip\index.html')
        response.writeHead(200, "{"Content-Type": 'text/html'}")
        response.end()
})

server.listen(5000)
