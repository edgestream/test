import * as http from "http"

let server = http.createServer((req, res) => {
        console.info("[%s] %s %s", server.constructor.name, req.method, req.url)
        res.writeHead(200)
        res.write("HELLO")
        res.end()
    })
server.on("close", () => console.info("[%s] CLOSE", server.constructor.name))
server.on("connection", (socket) => console.info("[%s] CONNECTION", server.constructor.name))
server.on("error", (err) => console.info("[%s] ERROR: %s", server.constructor.name, err.message))
server.on("listening", () => console.info("[%s] LISTENING", server.constructor.name))
server.listen(3000)