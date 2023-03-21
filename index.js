const { PORT } = require("./config/config.js");
const express = require("express");
const server = express();


server.listen(process.env.PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
