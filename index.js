const express = require("express");
const server = express();
const { PORT } = require("./config/config.js");

server.listen(process.env.PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});