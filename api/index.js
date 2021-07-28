require("dotenv").config();
const { config } = require("./config");
const app = require("./app");
const port = config.port;

app.listen(port);
console.log(`listening on http://localhost:${port}`);
