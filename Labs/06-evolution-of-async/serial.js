const { promisify } = require("util");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const printPromise = promisify(print);

const opA = async (cb) => {
  // await setTimeout(() => {
  //   cb(null, "A");
  // }, 500);
  await resolveAfterTime(500, cb(null, "A"));
};

const opB = async (cb) => {
  // await setTimeout(() => {
  //   cb(null, "B");
  // }, 250);

  await resolveAfterTime(250, cb(null, "B"));
};

const opC = async (cb) => {
  // await setTimeout(() => {
  //   cb(null, "C");
  // }, 125);
  await resolveAfterTime(125, cb(null, "C"));
};

function resolveAfterTime(ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

async function run() {
  await opA(print);
  await opB(print);
  await opC(print);
}

run();
