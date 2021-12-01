import { StringDecoder } from "string_decoder";

const frag1 = Buffer.from("f09f"); // utf8
const frag2 = Buffer.from("9180", "hex");

console.log(frag1.toString());
console.log(frag2.toString("hex"));
// console.log(frag2.isEncoding);

const decoder = new StringDecoder();

console.log(decoder.write(frag1));
console.log(decoder.write(frag2));
