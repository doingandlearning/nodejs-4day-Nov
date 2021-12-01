const express = require("express");

const { auth } = require("./auth");

const birdRoutes = require("./router/birds");

const app = express();

app.use(express.json());

app.use(express.static("public"));
// app.use(auth);

app.use("/birds", birdRoutes);

let userStore = [
  {
    id: 1,
    name: "Kevin",
    role: "Instructor",
    location: "Northern Ireland",
  },
];

let id = 1;

app.get("/", (req, res) => {
  res.json(userStore);
});

app.post("/", (req, res) => {
  const newUser = req.body;
  newUser.id = ++id;
  userStore.push(newUser);

  res.json({ success: true, message: "added user" });
});

app.get("/users/:id/edit/:target", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
  res.send("Hello Altus!");
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry, can't find that.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
