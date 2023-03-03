const app = require("./app")
const config = require("./config/config")
const http = require("http")
const PORT = config.PORT || 3000
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Starting server on http://locahost:${PORT}`)
})