import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

import * as express from "express";
import { Request, Response } from "express";

createConnection().then((connection) => {
  const app = express();
  app.use(express.json());
  const userRepository = connection.getRepository(User);

  app.get("/users", async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
  });

  app.post("/users", async (req: Request, res: Response) => {
    const user = await userRepository.create(req.body);
    const results = await userRepository.save(user);
    res.json(results);
  });

  app.get("/users/:id", (req, res) => {});

  app.listen(3000, () => console.log("Listening"));
});

// createConnection()
//   .then(async (connection) => {
//     const userRepository = getRepository(User);
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Mo";
//     user.lastName = "Salti";
//     user.age = 21;
//     await userRepository.save(user);
//     console.log("Saved a new user with id: " + user.id);
//     console.log(user);
//     console.log("Loading users from the database...");
//     const users = await userRepository.find();
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");
//   })
//   .catch((error) => console.log(error));
