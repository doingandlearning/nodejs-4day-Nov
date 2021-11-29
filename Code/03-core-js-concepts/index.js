//

function outerFn() {
  let name = "Kevin";

  function print() {
    console.log(name);
  }
  return {
    sayName: print,
    setName: function (newName) {
      name = newName;
    },
  };
}

const namingFn = outerFn();

// // console.log(namingFn.sayName());
// // namingFn.setName("Mo");
// // console.log(namingFn.sayName());

// function createTimes(value) {
//   return function (num) {
//     return num * value;
//   };
// }

// const times5 = createTimes(5);
// const times6 = createTimes(6);

// console.log(times5(60));

function createSigner(secret) {
  const keypair = {
    publicKey: secret.toLowerCase(),
    privateKey: secret.toUpperCase(),
  };
  return function (content) {
    return {
      signed: content
        .split("")
        .map(
          (char, idx) =>
            char + keypair.privateKey[idx % keypair.privateKey.length]
        )
        .join(""),
    };
  };
}

const kevinsSigner = createSigner("my very secret secret");
const mosSigner = createSigner("a very secure secret");

console.log(kevinsSigner("Can you come up with better examples please?"));
console.log(mosSigner("I'll try."));
