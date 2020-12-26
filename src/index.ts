import * as http from "http"

let requestListener: http.RequestListener = (req, res) => {
    res.writeHead(200)
    res.write("HELLO")
    res.end()
}
let server = http.createServer(requestListener)
let listener = server.listen(3000)