import https from "http";
import app from "./app";
import sockets from "./sockets";

// load the environmental variables
require("dotenv").config();

const ENVIRONMENT = process.env.ENVIRONMENT;
const PORT = process.env.PORT || 8000;

const server = https.createServer(app);
sockets(server);

// socket listening here
//server.listen(PORT);

// rest listening here
server.listen(PORT, err => {
  if (err) {
    return ENVIRONMENT === 'development'
      ? console.log(`\u274c  Encountered an error - ${err}.`)
      : console.log(`\u274c  Encountered a server error.`);
  }
  return console.log(`\u2705  API is runnint at port ${PORT}`);
});

