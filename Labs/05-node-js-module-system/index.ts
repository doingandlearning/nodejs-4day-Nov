import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    // this.name = opts.name;
  }

  destroy(err: any) {
    if (err) {
      this.emit("error", err);
    }
    this.emit("close");
  }
}

const newEmitter = new MyEmitter();

const listener1 = () => {
  console.log("I'm listener 1");
};
const listener2 = () => {
  console.log("I'm listener 2");
};

newEmitter.on("my-first-event", listener1);
newEmitter.on("my-first-event", listener2);
newEmitter.on("error", (err) => console.log(err));

newEmitter.emit("my-first-event");
newEmitter.removeListener("my-first-event", listener1);
newEmitter.emit("error");
newEmitter.emit("my-first-event");
newEmitter.emit("my-first-event");
newEmitter.emit("my-second-event");
