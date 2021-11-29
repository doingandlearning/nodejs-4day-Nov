import { createServer, IncomingMessage, ServerResponse } from "http";
import * as fs from "fs";

type User = {
  id: number;
  name: string;
  role: string;
  location: string;
};

let userStore: User[] = [
  {
    id: 1,
    name: "Kevin",
    role: "Instructor",
    location: "Northern Ireland",
  },
];

let id = 1;

// TODO:
// - Add CRUD functionality to our in memory userStore over HTTP
// - Decide if route or verb is the right way to handle it
// -

const app = createServer(function (
  req: IncomingMessage,
  res: ServerResponse
) {}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");
