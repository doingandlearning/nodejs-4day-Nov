"use strict";
const fs = require("fs");
const { Writable, finished } = require("stream");

const writeable = fs.createWriteStream("./out");

const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write(chunk, enc, next) {
      console.log(enc);
      data.push(chunk);
      next();
    },
  });
};

const data = {};
const writingStream = createWriteStream(data);

writingStream.on("finish", () => console.log("finished writing"));

writingStream.write("Pavan\n");
writingStream.write("Natasha\n");
writingStream.write("Shivangi\n");
writingStream.end("nothing more to write\n");

console.log(data);

finished(writingStream, (err) => {
  if (err) {
    console.log("there was an error");
  }

  console.log("this was closed correctly.");
});
