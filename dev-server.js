// stolen from https://www.npmjs.com/package/live-server#usage-from-node

var liveServer = require("live-server")
 
var params = {
    port: 8181, // Set the server port. Defaults to 8080. 
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. 
    open: true, // When false, it won't load your browser by default. 
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications) 
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec. 
    logLevel: 2 // 0 = errors only, 1 = some, 2 = lots 
}
liveServer.start(params)