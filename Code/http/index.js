const http = require("http");
const port = 3000;

let userStore = [
  {
    id: 1,
    name: "Kevin",
    role: "Instructor",
    location: "Northern Ireland",
  },
];

let id = 1;

const app = http
  .createServer
  // req.url
  // req.method

  // res.end()

  // Can't interact with res

  // do some work for the webhook
  ()
  .listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");

// TODO:
// - Add CRUD functionality to our in memory userStore over HTTP
// - Decide if route or verb is the right way to handle it
// -
