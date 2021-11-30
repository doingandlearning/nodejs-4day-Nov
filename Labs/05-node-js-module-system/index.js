const { readFile } = require("fs");

readFile("./not-exist.js", (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
});
