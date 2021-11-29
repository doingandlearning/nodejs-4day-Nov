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

const app = http.createServer();

// TODO:
// - Add CRUD functionality to our in memory userStore over HTTP
// - Decide if route or verb is the right way to handle it
// -
